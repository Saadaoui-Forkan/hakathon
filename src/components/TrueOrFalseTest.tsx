"use client"

type TrueOrFalseTestProps = {
    question: string;
    questionNumber: number;
    submitAnswer: (answer: string) => void
    field: string;
    topic: string;
}

export default function TrueOrFalseTest({ field, question, topic, submitAnswer, questionNumber }: TrueOrFalseTestProps) {
    return (
        <div className="space-y-8">
            <h1 className="text-white flex text-2xl gap-2">
                <span>{questionNumber}.</span> {question}
            </h1>
            <div className="flex gap-10 justify-center">
                <button
                    onClick={() => submitAnswer("true")}
                    className="bg-pureWhite px-8 py-2 rounded-lg text-xl hover:bg-crystalTeal"
                >
                    True
                </button>
                <button
                    onClick={() => submitAnswer("false")}
                    className="bg-pureWhite px-8 py-2 rounded-lg text-xl hover:bg-crystalTeal"
                >
                    False
                </button>
            </div>
        </div>
    );
}
