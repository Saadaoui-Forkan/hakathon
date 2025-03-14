type GenerateQuestionsParams = {
    field: string;
    topic: string;
    level: "advanced" | "easy" | "medium";
    questionType: "multi options" | "true or false" | "essay";
}

type EvaluateAnswerParams = {
    answer: string;
    question: string;
} & Pick<GenerateQuestionsParams, "field" | "topic">

type SpecializationFieldSuggestion = {
    fieldName: string;
    topics: string[]
}
