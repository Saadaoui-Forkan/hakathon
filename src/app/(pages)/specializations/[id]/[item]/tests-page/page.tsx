"use client"

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import Back from '@/components/Back';
import useQuestions from '@/hooks/useQuestions';

const TestingPage = () => {
    const router = useRouter();
    const params = useParams<{ item: string, id: string }>();
    const searchParams = useSearchParams();
    const field = decodeURIComponent(params.id)
    const topic = decodeURIComponent(params.item)
    const level = decodeURIComponent(searchParams.get("level") || "medium") as QuestionLevel
    const questionType = decodeURIComponent(searchParams.get("question-type") || "multi options") as QuestionType

    const { loading, error, questions } = useQuestions({
        field,
        topic,
        level,
        questionType,
    })

    console.log(questions)

    return (
        <PageLayout>
            <Back onClick={() => router.replace(`/specializations/${field}/${topic}`)} />
            {/* Here we render the components of tests based on te type of the test */}
        </PageLayout>
    )
}

export default TestingPage