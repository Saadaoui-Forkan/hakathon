import fieldAndTopicChecker from '@/lib/fieldAndTopicChecker';
import generateQuestions from '@/lib/generateQuestions';

export async function GET(request: Request) {
    const url = new URL(request.url);

    const { field, topic, checkErrorResponse } = fieldAndTopicChecker(url)
    if (!field && !topic && checkErrorResponse) {
        return checkErrorResponse
    }

    const level = (url.searchParams.get("level") || "medium") as GenerateQuestionsParams["level"]

    const questionType = (url.searchParams.get("question-type")) as GenerateQuestionsParams["questionType"]

    const questions = await generateQuestions({
        field,
        topic,
        level,
        questionType
    })

    return new Response(
        JSON.stringify({ response: questions }),
        { status: 200 }
    )
}
