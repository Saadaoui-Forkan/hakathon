"use client"

type MultiOptionsTestProps = {
    multiOptionsQuestion: MultiOptionsQuestion
    questionNumber: number;
    submitAnswer: (answer: string) => void;
    chosenAnswer: string | null;
}
export default function MultiOptionsTest({ multiOptionsQuestion, questionNumber, submitAnswer, chosenAnswer }: MultiOptionsTestProps) {

    return (
        <div className="space-y-8">
            <h1 className="text-white flex text-2xl gap-2">
                <span>{questionNumber}.</span> {multiOptionsQuestion?.question}
            </h1>
            <div className="grid sm:grid-cols-2 gap-4">
                {multiOptionsQuestion?.options.map((option) => (
                    <button
                        key={option}
                        className={`${chosenAnswer === option ? "bg-crystalTeal" : "bg-pureWhite"} p-5 ${chosenAnswer ? "" : "hover:bg-crystalTeal"} rounded-lg transition-colors`}
                        onClick={() => submitAnswer(option)}
                        disabled={!!chosenAnswer}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}
