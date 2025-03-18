import textStreamHandler from "@/lib/textStreamHandler";
import { useEffect, useState } from "react"

type UseDiscussionProps = {
    question: string;
    options?: string[];
    discussionId: string;
} & Pick<GenerateQuestionsParams, "field" | "topic" | "questionType">

export default function useDiscussion({ field, topic, questionType, question, options, discussionId }: UseDiscussionProps) {
    const [messages, setMessages] = useState<DisscusionAreaMessage[]>([]);
    const [currentResponse, setCurrentResponse] = useState("");
    const [currentLoading, setCurrentLoading] = useState(false);
    const [currentResponseError, setCurrentResponseError] = useState(false);

    function submitMessage(message: string) {
        if (!currentLoading) {
            setCurrentLoading(true)

            const query = new URLSearchParams()
            query.set("field", field)
            query.set("topic", topic)
            query.set("question-type", questionType)
            query.set("discussionId", discussionId)

            setMessages((messages) => {
                return [
                    ...messages,
                    { content: message, role: "user" },
                ]
            })

            fetch(`/api/answers?${query.toString()}`, {
                method: "POST",
                body: JSON.stringify({ question, answer: message, options }),
            })
                .then((res) => {
                    if (res.status === 200 && res.body) {
                        textStreamHandler(res.body, {
                            onChunk(chunk) {
                                setCurrentResponse((res) => res += chunk)
                                const element = document.getElementById("discussion-area");
                                if (element) {
                                    element.scrollTop = element.scrollHeight;
                                }
                            },
                            onEnd(fullResponse) {
                                setMessages((messages) => {
                                    return [
                                        ...messages,
                                        { content: fullResponse, role: "AI" },
                                    ]
                                })
                                setCurrentResponse("")
                                setCurrentLoading(false)
                            },
                        })
                        setCurrentResponseError(false)
                    } else {
                        setCurrentResponseError(true)
                    }
                })
                .catch(() => setCurrentResponseError(true))
        }
    }

    useEffect(() => {
        currentResponse && setCurrentResponse("")
        currentLoading && setCurrentLoading(false)
        currentResponseError && setCurrentResponseError(false)
        setMessages([])
    }, [question])

    return {
        currentLoading,
        currentResponseError,
        submitMessage,
        currentResponse,
        messages,
    }
};
