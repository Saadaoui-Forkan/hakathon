import { GenerateQuestionsParams } from "@/lib/generateQuestions"

const multiOptionsPrompt = `
Always provide the questions strictly as a valid JSON array of objects without any extra text or prefixes,
Each object should represent a question with four answer options, formatted as follows: 
[
    {
        "question": "The question here",
        "options": ["Option 1", "Option 2", "Option 3", "Option 4"]
    }
]
`.replaceAll(/(\n|\s\s\s\s)/g, "")

const trueOrFalseQuestionsPrompt = `
Always provide the questions strictly as a valid JSON array of strings without any extra text or prefixes,
Each string should represent a question in true or false type, formatted as follows: 
["question 1?", "question 2?", "question 3?", "question 4?"]
`.replaceAll(/(\n)/g, "")

const essayQuestionsPrompt = `
Always provide the questions strictly as a valid JSON array of strings without any extra text or prefixes,
Each string should represent an essay question, formatted as follows: 
["question 1", "question 2", "question 3", "question 4"]
`.replaceAll(/(\n)/g, "")

export function getQuestionTypePrompt(type: GenerateQuestionsParams["questionType"]) {
    switch (type) {
        case "multi options": return multiOptionsPrompt;

        case "essay": return essayQuestionsPrompt;

        default: return trueOrFalseQuestionsPrompt;
    }
};
