import { FormEvent } from "react";

type ChoiceInputProps = {
    onChoice: (choice: string) => void;
    title: string
    inputPlaceHolder: string
}

export default function ChoiceInput({ onChoice, title, inputPlaceHolder }: ChoiceInputProps) {

    function choiceHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const choice = form.get("choice-input")
        if (choice) {
            onChoice(choice.toString())
        }
    }

    return (
        <form onSubmit={choiceHandler} className="flex flex-col gap-1 mt-4">
            <p className="text-white">{title}</p>
            <div className="flex gap-2">
                <input
                    name="choice-input"
                    type="text"
                    placeholder={inputPlaceHolder}
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                />
                <button type="submit" className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">
                    Continue
                </button>
            </div>
        </form>
    )
};
