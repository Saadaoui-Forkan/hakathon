"use client"

import { levels, questionTypes } from '@/constants/specializationFields'
import { useParams, useRouter } from 'next/navigation';

const QuizSelection = () => {
    const params = useParams<{ id: string }>();
    const router = useRouter();

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/bg.jpg')" }}
        >
            <div className="w-full max-w-3xl p-6 rounded-lg">
                <button
                    className="bg-crystalTeal text-white px-6 py-1 rounded-lg mb-4"
                    onClick={() => { router.replace(`/specializations/${params.id}`) }}
                >
                    Back
                </button>
                <div className="my-6">
                    <h2 className="text-white text-2xl font-bold">
                        Select level of the text
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-pureWhite rounded-lg my-2">
                        {levels.map((level) => (
                            <button
                                key={level}
                                className="bg-electricMagenta text-pureWhite px-4 py-2 rounded-lg"
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="my-6">
                    <h2 className="text-white text-2xl font-bold">
                        Select Type of the text
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-pureWhite rounded-lg my-2">
                        {questionTypes.map((type) => (
                            <button
                                key={type}
                                className="bg-electricMagenta text-pureWhite px-4 py-2 rounded-lg"
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        className="bg-teal-500 text-white px-6 py-2 rounded-lg"
                    >
                        Start
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuizSelection