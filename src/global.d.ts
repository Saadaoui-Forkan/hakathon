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
    existingDiscussionId: string | null;
    options: string[]
} & Pick<GenerateQuestionsParams, "field" | "topic" | "questionType">

type SpecializationFieldSuggestion = {
    fieldName: string;
    topics: string[]
}

type MultiOptionsQuestion = {
    question: string;
    options: string[];
}