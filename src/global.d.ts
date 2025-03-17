type QuestionType = "multi options" | "true or false" | "essay";
type QuestionLevel = "advanced" | "easy" | "medium";

type GenerateQuestionsParams = {
    field: string;
    topic: string;
    level: QuestionLevel;
    questionType: QuestionType;
}

type EvaluateAnswerParams = {
    answer: string;
    question: string;
} & Pick<GenerateQuestionsParams, "field" | "topic">

type SpecializationFieldSuggestion = {
    fieldName: string;
    topics: string[]
}

type MultiOptionsQuestion = {
    question: string;
    options: string[];
}