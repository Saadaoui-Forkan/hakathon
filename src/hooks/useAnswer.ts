import textStreamHandler from "@/lib/textStreamHandler";
import { useEffect, useState } from "react"

type UseAnswerProps = {
    question: string;
} & Pick<GenerateQuestionsParams, "field" | "topic" | "questionType">

export default function useAnswer({ field, topic, questionType, question }: UseAnswerProps) {
    const [response, setResponse] = useState("");
    const [chosenAnswer, setChosenAnswer] = useState<null | string>(null);
    const [responding, setResponding] = useState(false);
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState(false);
    const [discussionId, setDiscussionId] = useState<string>("");

    function submitAnswer(answer: string, context?: { options?: string[] }) {
        if (!loading) {
            setLoading(true)
            setChosenAnswer(answer)

            const query = new URLSearchParams()
            query.set("field", field)
            query.set("topic", topic)
            query.set("question-type", questionType)

            fetch(`/api/answers?${query.toString()}`, {
                method: "POST",
                body: JSON.stringify({ question, answer, options: context?.options }),
            })
                .then((res) => {
                    if (res.status === 200 && res.body) {
                        setResponding(true)
                        textStreamHandler(res.body, {
                            onChunk(chunk) {
                                setResponse((res) => res += chunk)
                            },
                            onEnd() {
                                setResponding(false)
                                setDone(true)
                                const discussionId = res.headers.get("discussionId")
                                discussionId && setDiscussionId(discussionId.toString())
                            },
                        })
                        setError(false)
                    } else {
                        setError(true)
                        setDone(false)
                    }
                })
                .finally(() => setLoading(false))
                .catch(() => {
                    setError(true)
                    setResponding(false)
                })
        }
    }

    useEffect(() => {
        response && setResponse("")
        loading && setLoading(false)
        error && setError(false)
        done && setDone(false)
        responding && setResponding(false)
        setChosenAnswer(null)
    }, [question])

    return {
        loading,
        responding,
        error,
        submitAnswer,
        response,
        done,
        discussionId,
        chosenAnswer,
    }
};
