import evaluateAnswer from '@/lib/evaluateAnswer';
import fieldAndTopicChecker from '@/lib/fieldAndTopicChecker';

export async function POST(request: Request) {
    const { field, topic, checkErrorResponse } = fieldAndTopicChecker(new URL(request.url))
    if (!field && !topic && checkErrorResponse) {
        return checkErrorResponse
    }

    const payload = await request.json();

    const question = payload.question
    const answer = payload.answer

    const responseStream = await evaluateAnswer({ question, answer, field, topic });

    return new Response(responseStream, { status: 200 });
}