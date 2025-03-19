"use client"

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import Back from '@/components/Back';
import useQuestions from '@/hooks/useQuestions';
import TrueOrFalseTest from '@/components/TrueOrFalseTest';
import EssayTest from '@/components/EssayTest';
import DisscusionArea from '@/components/DisscusionArea';
import MultiOptionsTest from '@/components/MultiOptionsTest';
import useAnswer from '@/hooks/useAnswer';
import ProgressBar from '@/components/ProgressBar';

const TestingPage = () => {
    const router = useRouter();
    const params = useParams<{ item: string, id: string }>();
    const searchParams = useSearchParams();
    const field = decodeURIComponent(params.id)
    const topic = decodeURIComponent(params.item)
    const level = decodeURIComponent(searchParams.get("level") || "medium") as QuestionLevel
    const questionType = decodeURIComponent(searchParams.get("question-type") || "multi options") as QuestionType

    const {
        loading: questionsLoading,
        error: questionsError,
        questions,
        currentQuestionIndex,
        goToNextQuestion,
    } = useQuestions({
        field,
        topic,
        level,
        questionType,
    })

    const currentQuestion =
        typeof questions[currentQuestionIndex] === "string" ? questions[currentQuestionIndex]
            : questions[currentQuestionIndex]?.question

    const {
        submitAnswer,
        loading: answerLoading,
        error: answerError,
        response,
        done: responseDone,
        discussionId,
        chosenAnswer,
    } = useAnswer({
        field,
        topic,
        question: currentQuestion,
        questionType,
    })

    return (
        <PageLayout>
            <div className='flex flex-col space-y-10'>
                {
                    !questionsLoading && !questionsError &&
                    <ProgressBar total={questions.length} value={currentQuestionIndex + 1} />
                }
                {
                    questionsLoading ? <p className='text-white text-3xl'>Preparing your test...</p> :
                        questionsError ? "Error !!!" :
                            questionType === "multi options" ? (
                                <MultiOptionsTest
                                    multiOptionsQuestion={questions[currentQuestionIndex] as MultiOptionsQuestion}
                                    submitAnswer={submitAnswer}
                                    questionNumber={currentQuestionIndex + 1}
                                    chosenAnswer={chosenAnswer}
                                />
                            ) :
                                questionType === "true or false" ? (
                                    <TrueOrFalseTest
                                        questionNumber={currentQuestionIndex + 1}
                                        question={questions[currentQuestionIndex] as string}
                                        submitAnswer={submitAnswer}
                                        chosenAnswer={chosenAnswer}
                                    />
                                ) : questionType === "essay" ? (
                                    <EssayTest
                                        questionNumber={currentQuestionIndex + 1}
                                        question={questions[currentQuestionIndex] as string}
                                        submitAnswer={submitAnswer}
                                        disabled={!!chosenAnswer}
                                    />
                                ) : null
                }
                {
                    answerLoading || response &&
                    <DisscusionArea
                        question={currentQuestion}
                        field={field}
                        topic={topic}
                        questionType={questionType}
                        discussionId={discussionId}
                        firstResponse={{
                            answer: response,
                            isGenerating: answerLoading,
                            error: answerError,
                            generatingDone: responseDone,
                        }}
                    />
                }
                {
                    responseDone &&
                    <button
                        className="bg-crystalTeal text-white px-8 py-3 w-fit rounded-lg mb-4 mx-auto cursor-pointer"
                        onClick={goToNextQuestion}
                    >
                        Next Question
                    </button>
                }
            </div>
        </PageLayout>
    )
}

export default TestingPage