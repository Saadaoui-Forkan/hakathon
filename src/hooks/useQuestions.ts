import { useEffect, useState } from "react"

export default function useQuestions({ field, topic, level, questionType }: GenerateQuestionsParams) {

    const [questions, setQuestions] = useState<string[] | MultiOptionsQuestion[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!loading) {
            setLoading(true)

            const query = new URLSearchParams()
            query.set("field", field)
            query.set("topic", topic)
            query.set("question-type", questionType)
            query.set("level", level)

            fetch(`/api/questions?${query.toString()}`)
                .then((res) => res.json())
                .then((res) => res.response)
                .then((questions: string[] | MultiOptionsQuestion[]) => {
                    setQuestions(questions)
                    setError(false)
                })
                .catch(() => setError(true))
                .finally(() => setLoading(false))
        }
    }, [])

    return {
        loading,
        error,
        questions,
    }
};
