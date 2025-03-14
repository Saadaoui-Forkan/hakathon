import { modelName } from '@/constants/model';
import ollamaClient from './ollamaClient';

export default async function evaluateAnswer({ field, topic, answer, question }: EvaluateAnswerParams) {
    const response = await ollamaClient.chat({
        model: modelName,
        messages: [
            {
                role: "system",
                content: `
                    You are an expert in ${field},
                    Your task is to assess user's knowledge in ${field}, specifically in ${topic} topic.
                    evaluate user's answer to "${question}" question in ${topic} topic whether it is right or wrong,
                    correct the user if his answer is wrong, incomplete or lacks something.
                    Make your correction to the point and directed to the user as you talk to him.
                `,
            },
            {
                role: "user",
                content: answer,
            }
        ],
        stream: true,
    })

    const stream = new ReadableStream({
        async start(controller) {
            for await (const llmResponsePart of response) {
                controller.enqueue(llmResponsePart.message.content)
            }
        },
    })

    return stream
};
