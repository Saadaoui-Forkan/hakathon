import evaluateAnswer from '@/lib/evaluateAnswer';
import fieldAndTopicChecker from '@/lib/fieldAndTopicChecker';

export async function POST(request: Request) {
    const url = new URL(request.url)
    const { field, topic, checkErrorResponse } = fieldAndTopicChecker(url)
    if (!field && !topic && checkErrorResponse) {
        return checkErrorResponse
    }

    const questionType = (url.searchParams.get("question-type")) as GenerateQuestionsParams["questionType"]

    const payload = await request.json();

    const question = payload.question
    const answer = payload.answer
    const options = payload.options

    const existingDiscussionId = url.searchParams.get("discussionId")

    const { responseStream, discussionId } = await evaluateAnswer({
        question,
        answer,
        field,
        topic,
        questionType,
        options,
        existingDiscussionId,
    });

    return new Response(responseStream, { status: 200, headers: { discussionId } });
}