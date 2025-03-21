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
    const field = decodeURIComponent(params.id)
    const router = useRouter();

    const [selectionState, setSelectionState] = useState<{ level: QuestionLevel | "", questionType: QuestionType | "" }>({
        level: "",
        questionType: "",
    })

    return (
        <PageLayout>
            <Back onClick={() => router.replace(`/specializations/${field}`)} />
            <div className='mb-5'>
                <h2 className="text-white text-2xl font-bold mb-1">{field}</h2>
                <p className='text-white'>{topic}</p>
            </div>
            <h2 className="text-white text-xl mb-1">Select the level of the test</h2>
            <GridContainer>
                {levels.map(level => (
                    <button
                        key={level}
                        className={`${selectionState.level === level ? "bg-deepAmethyst" : "bg-electricMagenta"} text-pureWhite px-4 py-2 rounded-lg`}
                        onClick={() => setSelectionState((selectionState) => ({ ...selectionState, level }))}
                    >
                        {level}
                    </button>
                ))}
            </GridContainer>
            <h2 className="text-white text-xl mb-1 mt-4">Select the type of the test</h2>
            <GridContainer>
                {questionTypes.map(type => (
                    <button
                        key={type}
                        className={`${selectionState.questionType === type ? "bg-deepAmethyst" : "bg-electricMagenta"} text-pureWhite px-4 py-2 rounded-lg`}
                        onClick={() => setSelectionState((selectionState) => ({ ...selectionState, questionType: type }))}
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
                        if (selectionState.level && selectionState.questionType) {
                            query.set("level", selectionState.level)
                            query.set("question-type", selectionState.questionType)
                            router.push(`/specializations/${field}/${topic}/tests-page?${query.toString()}`)
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