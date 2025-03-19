"use client"

type MultiOptionsTestProps = {
    multiOptionsQuestion: MultiOptionsQuestion
    questionNumber: number;
    submitAnswer: (answer: string) => void;
    chosenAnswer: string | null;
}
export default function MultiOptionsTest({ multiOptionsQuestion, questionNumber, submitAnswer, chosenAnswer }: MultiOptionsTestProps) {

    return (
        <div>

        </div>
    );
}
