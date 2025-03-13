export default function fieldAndTopicChecker(url: URL) {
    const field = url.searchParams.get("field");
    if (!field) {
        return {
            checkErrorResponse: new Response(
                JSON.stringify({ error: "You have to specify a field of specialization" }),
                { status: 400 }
            )
        }
    }

    const topic = url.searchParams.get("topic");
    if (!topic) {

        return {
            checkErrorResponse: new Response(
                JSON.stringify({ error: "You have to specify a topic inside the field of specialization" }),
                { status: 400 }
            )
        }
    }

    return { field, topic }
};
