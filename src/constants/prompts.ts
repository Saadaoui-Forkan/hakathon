const multiOptionsPrompt = `
Always provide the questions strictly as a valid JSON array of objects without any extra text or prefixes,
Each object should represent a question with four answer options, formatted as follows: 
[
    {
        "question": "The question here",
        "options": ["Option 1", "Option 2", "Option 3", "Option 4"]
    }
]
`

const trueOrFalseQuestionsPrompt = `
Always provide the questions strictly as a valid JSON array of strings without any extra text or prefixes,
Each string must be a "true or false" question, formatted as follows: 
["question 1?", "question 2?", "question 3?", "question 4?"]
`

const essayQuestionsPrompt = `
Always provide the questions strictly as a valid JSON array of strings without any extra text or prefixes,
Each string should represent an essay question, formatted as follows: 
["question 1", "question 2", "question 3", "question 4"]
`

export function getQuestionTypePrompt(type: GenerateQuestionsParams["questionType"]) {
    switch (type) {
        case "multi options": return multiOptionsPrompt;

        case "essay": return essayQuestionsPrompt;

        default: return trueOrFalseQuestionsPrompt;
    }
};

const multiOptionsAnswerContextPrompt = (options: string[]) => `
the question is a multi-options question, The available options for the user are 
"${options[0]}", "${options[1]}", "${options[2]}", and "${options[3]}"
`

const trueOrFalseAnswerContextPrompt = 'the question is a "true or false" question, So the user has to answer by "true" or "false"'

export function getAnswerTypeContextPrompt(type: GenerateQuestionsParams["questionType"], options?: string[]) {

    if (type === "multi options" && options) {
        return multiOptionsAnswerContextPrompt(options)
    }

    if (type === "true or false") {
        return trueOrFalseAnswerContextPrompt
    }

    return ""
};
