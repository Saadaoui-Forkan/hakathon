"use client"

import Back from '@/components/Back';
import GridContainer from '@/components/GridContainer';
import PageLayout from '@/components/PageLayout';
import { levels, questionTypes } from '@/constants/specializationFields'
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

const QuizSelection = () => {
    const params = useParams<{ item: string, id: string }>();
    const topic = decodeURIComponent(params.item)
    const router = useRouter();

    const [state, setState] = useState<{ level: QuestionLevel | "", questionType: QuestionType | "" }>({
        level: "",
        questionType: "",
    })

    return (
        <PageLayout>
            <Back onClick={() => router.replace(`/specializations/${params.id}`)} />
            <h2 className="text-white text-2xl font-bold">Select level of the test</h2>
            <GridContainer>
                {levels.map(level => (
                    <button
                        key={level}
                        className={`${state.level === level ? "bg-electricMagenta/80" : "bg-electricMagenta"} text-pureWhite px-4 py-2 rounded-lg`}
                        onClick={() => setState((state) => ({ ...state, level }))}
                    >
                        {level}
                    </button>
                ))}
            </GridContainer>
            <h2 className="text-white text-2xl font-bold">Select Type of the test</h2>
            <GridContainer>
                {questionTypes.map(type => (
                    <button
                        key={type}
                        className={`${state.questionType === type ? "bg-electricMagenta/80" : "bg-electricMagenta"} text-pureWhite px-4 py-2 rounded-lg`}
                        onClick={() => setState((state) => ({ ...state, questionType: type }))}
                    >
                        {type}
                    </button>
                ))}
            </GridContainer>
            <div className="flex justify-center mt-6">
                <button
                    className="bg-teal-500 text-white px-6 py-2 rounded-lg"
                    onClick={() => {
                        const query = new URLSearchParams()
                        if (state.level && state.questionType) {
                            query.set("level", state.level)
                            query.set("question-type", state.questionType)
                            router.replace(`/specializations/${params.id}/${topic}/tests-page?${query.toString()}`)
                        }
                    }}
                >
                    Start
                </button>
            </div>
        </PageLayout>
    )
}

export default QuizSelection