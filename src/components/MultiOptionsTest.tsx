"use client"

type MultiOptionsTestProps = {
    field: string;
    topic: string;
    multiOptionsQuestion: MultiOptionsQuestion
    questionNumber: number;
    submitAnswer: (answer: string) => void
}
export default function MultiOptionsTest({ multiOptionsQuestion, field, topic, questionNumber, submitAnswer }: MultiOptionsTestProps) {

    return (
        <div>

        </div>
    );
}
