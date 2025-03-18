"use client"

import { FormEvent } from "react";

type EssayTestProps = {
    question: string;
    questionNumber: number;
    submitAnswer: (answer: string) => void
    field: string;
    topic: string;
}

export default function EssayTest({ field, question, topic, submitAnswer, questionNumber }: EssayTestProps) {
    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const answer = form.get("answer")
        if (answer) {
            console.log(answer)
            submitAnswer(answer.toString())
        }
    }

    return (
        <div className="space-y-8">
            <h1 className="text-white flex text-2xl gap-2">
                <span>{questionNumber}.</span> {question}
            </h1>
            <form onSubmit={onSubmit}>
                <textarea
                    className="w-full px-2 py-1.5 rounded-lg focus:outline-none transition max-h-40"
                    name="answer"
                    placeholder="Type your answer here..."
                    rows={3}
                ></textarea>
                <button className="bg-crystalTeal float-right text-white px-6 py-1 rounded-lg cursor-pointer" type="submit">
                    Send
                </button>
            </form>
        </div>
    );
}
