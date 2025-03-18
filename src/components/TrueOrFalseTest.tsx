"use client"

type TrueOrFalseTestProps = {
    question: string;
    questionNumber: number;
    submitAnswer: (answer: string) => void
    disabled: boolean;
}

export default function TrueOrFalseTest({ question, submitAnswer, questionNumber, disabled }: TrueOrFalseTestProps) {
    return (
        <div className="space-y-8">
            <h1 className="text-white flex text-2xl gap-2">
                <span>{questionNumber}.</span> {question}
            </h1>
            <div className="flex gap-10 justify-center">
                <button
                    onClick={() => submitAnswer("true")}
                    className="bg-pureWhite px-8 py-2 rounded-lg text-xl hover:bg-crystalTeal"
                    disabled={disabled}
                >
                    True
                </button>
                <button
                    onClick={() => submitAnswer("false")}
                    className="bg-pureWhite px-8 py-2 rounded-lg text-xl hover:bg-crystalTeal"
                    disabled={disabled}
                >
                    False
                </button>
            </div>
        </div>
    );
}
