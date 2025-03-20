import { useRouter, useParams } from "next/navigation";

export default function TestsPageNavigationButtuns(
    { isTheLastQuestion, goToNextQuestion }: { isTheLastQuestion: boolean, goToNextQuestion: () => void }
) {
    const router = useRouter();
    const params = useParams<{ item: string, id: string }>();
    const field = decodeURIComponent(params.id);
    const topic = decodeURIComponent(params.item);

    return (
        <div className='flex gap-5 items-center justify-center mb-8'>
            {
                isTheLastQuestion ? (
                    <>
                        <button
                            onClick={() => router.replace("/")}
                            className="bg-deepAmethyst text-white px-8 py-3 w-fit rounded-lg  cursor-pointer"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => location.reload()}
                            className="bg-crystalTeal text-white px-8 py-3 w-fit rounded-lg  cursor-pointer"
                        >
                            Try More
                        </button>
                        <button
                            onClick={() => router.replace(`/specializations/${field}`)}
                            className="bg-electricMagenta text-white px-8 py-3 w-fit rounded-lg  cursor-pointer"
                        >
                            Try a different topic
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="bg-red-600 text-white px-8 py-3 w-fit rounded-lg cursor-pointer"
                            onClick={() => router.replace(`/specializations/${field}/${topic}`)}
                        >
                            Leave the test
                        </button>
                        <button
                            className="bg-crystalTeal text-white px-8 py-3 w-fit rounded-lg cursor-pointer"
                            onClick={goToNextQuestion}
                        >
                            Next Question
                        </button>
                    </>
                )
            }
        </div>
    )
};
