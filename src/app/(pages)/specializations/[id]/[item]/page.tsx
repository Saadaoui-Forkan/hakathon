"use client"

import Back from '@/components/Back';
import GridContainer from '@/components/GridContainer';
import PageLayout from '@/components/PageLayout';
import { levels, questionTypes } from '@/constants/specializationFields'
import { useParams, useRouter } from 'next/navigation';

const QuizSelection = () => {
    const params = useParams<{ item: string, id: string }>();
    const topic = decodeURIComponent(params.item)
    console.log(topic)
    const router = useRouter();

    return (
        <PageLayout>
            <Back onClick={() => router.replace(`/specializations/${params.id}`)} />
            <h2 className="text-white text-2xl font-bold">Select level of the test</h2>
            <GridContainer>
                {levels.map(level => (
                    <button key={level} className="bg-electricMagenta text-pureWhite px-4 py-2 rounded-lg">
                        {level}
                    </button>
                ))}
            </GridContainer>
            <h2 className="text-white text-2xl font-bold">Select Type of the test</h2>
            <GridContainer>
                {questionTypes.map(type => (
                    <button key={type} className="bg-electricMagenta text-pureWhite px-4 py-2 rounded-lg">
                        {type}
                    </button>
                ))}
            </GridContainer>
            <div className="flex justify-center mt-6">
                <button className="bg-teal-500 text-white px-6 py-2 rounded-lg">Start</button>
            </div>
        </PageLayout>
    )
}

export default QuizSelection