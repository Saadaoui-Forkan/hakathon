"use client"

type TrueOrFalseTestProps = {
    question: string;
    questionNumber: number;
    submitAnswer: (answer: string) => void
    chosenAnswer: string | null;
}

export default function TrueOrFalseTest({ question, submitAnswer, questionNumber, chosenAnswer }: TrueOrFalseTestProps) {
    return (
        <div className="space-y-8">
            <h1 className="text-white flex text-2xl gap-2">
                <span>{questionNumber}.</span> {question}
            </h1>
            <div className="flex gap-10 justify-center">
                <button
                    onClick={() => submitAnswer("true")}
                    className={`${chosenAnswer === "true" ? "bg-crystalTeal" : "bg-pureWhite"} px-8 py-2 rounded-lg text-xl ${chosenAnswer ? "" : "hover:bg-crystalTeal"}`}
                    disabled={!!chosenAnswer}
                >
                    True
                </button>
                <button
                    onClick={() => submitAnswer("false")}
                    className={`${chosenAnswer === "false" ? "bg-crystalTeal" : "bg-pureWhite"} px-8 py-2 rounded-lg text-xl ${chosenAnswer ? "" : "hover:bg-crystalTeal"}`}
                    disabled={!!chosenAnswer}
                >
                    False
                </button>
            </div>
        </div>
    );
}
