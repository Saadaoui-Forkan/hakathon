import { modelName } from '@/constants/model';
import ollamaClient from './ollamaClient';
import { addMessagesToChat, createChat, getChatMessages } from './chatsMessagesStore';
import { getAnswerTypeContextPrompt } from '@/constants/prompts';

export default async function evaluateAnswer(
    { field, topic, answer, question, existingDiscussionId, questionType, options }: EvaluateAnswerParams
) {
    const discussionHistory = existingDiscussionId ? getChatMessages(existingDiscussionId) : []

    const response = await ollamaClient.chat({
        model: modelName,
        messages: [
            {
                role: "system",
                content: `
                    You are an expert in ${field},
                    Your task is to assess user's knowledge in ${field}, specifically in ${topic} topic.
                    evaluate user's answer to "${question}" question in ${topic} topic whether it is right or wrong,
                    ${getAnswerTypeContextPrompt(questionType, options)},
                    correct the user if his answer is wrong, incomplete or lacks something.
                    Make your feedback brief, to the point and directed to the user as you talk to him.
                `,
            },
            ...discussionHistory,
            {
                role: "user",
                content: answer,
            }
        ],
        stream: true,
    })

    const discussionId = existingDiscussionId ? existingDiscussionId : crypto.randomUUID()

    const stream = new ReadableStream({
        async start(controller) {
            let fullResponse = ""
            for await (const llmResponsePart of response) {
                controller.enqueue(llmResponsePart.message.content)
                fullResponse += llmResponsePart.message.content
            }

            controller.close()

            const newUserAnswer = {
                role: "user",
                content: answer,
            }

            const newAIResponse = {
                role: "assistant",
                content: fullResponse,
            }

            if (existingDiscussionId) {
                addMessagesToChat(existingDiscussionId, [newUserAnswer, newAIResponse])
            } else {
                createChat(discussionId, [newUserAnswer, newAIResponse])
            }
        },
    })

    return {
        responseStream: stream,
        discussionId
    }
};
