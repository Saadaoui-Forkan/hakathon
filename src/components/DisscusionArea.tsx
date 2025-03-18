import ReactMarkdown from "react-markdown"
import Avatar from "./Avatar"
import { FormEvent } from "react";
import useDiscussion from "@/hooks/useDiscussion";

type DisscusionAreaProps = {
    field: string;
    topic: string;
    question: string;
    discussionId: string;
    questionType: QuestionType;
    options?: string[];
    firstResponse: {
        answer: string;
        isGenerating: boolean;
        generatingDone: boolean;
        error: boolean;
    }
}

export default function DisscusionArea({ field, topic, question, questionType, options, firstResponse, discussionId }: DisscusionAreaProps) {

    const {
        submitMessage,
        currentLoading,
        currentResponseError,
        currentResponse,
        messages
    } = useDiscussion({
        field,
        topic,
        question,
        questionType,
        options,
        discussionId,
    })

    function discussAnswer(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const message = form.get("message")
        if (message) {
            submitMessage(message.toString())
            e.currentTarget.reset()
        }
    }

    return (
        <div className={`space-y-8 p-4 rounded-lg transition-all max-h-[450px] overflow-auto ${messages.length ? "flex-1" : ""}`} id="discussion-area">
            <div className="gap-4 flex flex-col">
                <div className="flex gap-2">
                    <Avatar fallback="AI" />
                    <div className="prose w-full *:text-wrap rounded-md p-3 bg-[#F1C5F5] dark:prose-invert prose-h1:font-bold prose-h1:text-xl prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl prose-headings:underline text-left">
                        <ReactMarkdown>{firstResponse.answer}</ReactMarkdown>
                        {firstResponse.isGenerating && "Generating..."}
                    </div>
                </div>
                {
                    messages.map((message, i) => {
                        if (message.role === "AI") {
                            return (
                                <div key={i} className="flex gap-2">
                                    <Avatar fallback="AI" />
                                    <div className="prose w-full *:text-wrap rounded-md p-3 bg-[#F1C5F5] dark:prose-invert prose-h1:font-bold prose-h1:text-xl prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl prose-headings:underline text-left">
                                        <ReactMarkdown>{message.content}</ReactMarkdown>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={i} className="flex gap-2">
                                    <p className="flex-1 rounded-md p-3 text-end bg-[#D9D9D9]">
                                        {message.content}
                                    </p>
                                    <Avatar fallback="You" />
                                </div>
                            )
                        }
                    })
                }
                {
                    currentLoading && (
                        <div className="flex gap-2">
                            <Avatar fallback="AI" />
                            <div className="prose w-full *:text-wrap rounded-md p-3 bg-[#F1C5F5] dark:prose-invert prose-h1:font-bold prose-h1:text-xl prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl prose-headings:underline text-left">
                                <ReactMarkdown>{currentResponse}</ReactMarkdown>
                            </div>
                        </div>
                    )
                }
                {
                    currentResponseError && (
                        <p className="text-red-500">
                            Error !!!
                        </p>
                    )
                }
            </div>
            {discussionId &&
                <form onSubmit={discussAnswer} className="flex gap-2">
                    <input
                        className="w-full px-2 py-1.5 rounded-md focus:outline-none transition border-2 border-transparent focus:border-crystalTeal"
                        type="text"
                        name="message"
                        placeholder="What do you think about the answer"
                        disabled={currentLoading}
                    />
                    <button
                        className="bg-crystalTeal text-white px-6 py-1 rounded-lg cursor-pointer"
                        type="submit"
                        disabled={currentLoading}
                    >
                        Send
                    </button>
                </form>}
        </div >
    )
};
