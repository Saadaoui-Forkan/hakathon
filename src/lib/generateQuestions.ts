import { modelName } from '@/constants/model';
import { getQuestionTypePrompt } from '@/constants/prompts';
import ollamaClient from './ollamaClient';

export type GenerateQuestionsParams = {
    field: string;
    topic: string;
    level: "advanced" | "easy" | "medium";
    questionType: "multi options" | "true or false" | "essay";
}

export default async function generateQuestions({ field, level, topic, questionType }: GenerateQuestionsParams) {
    const result = await ollamaClient.generate({
        model: modelName,
        system: `
            You are an expert in ${field},
            Your task is to generate questions to test user's knowledge in ${field}, specifically in ${topic} topic.
            ${getQuestionTypePrompt(questionType)}.
            Ensure the questions are relevant and well-structured.
        `,
        prompt: `Generate 5 ${level} questions to test users knowledge in "${topic}" topic`,
    })

    const questions = JSON.parse(result.response)

    return questions
}