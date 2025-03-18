"use client"

type MultiOptionsTestProps = {
    multiOptionsQuestion: MultiOptionsQuestion
    questionNumber: number;
    submitAnswer: (answer: string) => void;
    disabled: boolean;
}
export default function MultiOptionsTest({ multiOptionsQuestion, questionNumber, submitAnswer }: MultiOptionsTestProps) {

    return (
        <div>

        </div>
    );
}
