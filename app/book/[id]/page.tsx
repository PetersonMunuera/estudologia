"use client";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { QuestionsBooksContext } from "@/app/contexts/questionsBooksContext";
import { QuestionType } from "@/app/@types/questionsBook";
import { FinishBookModal } from "@/app/components/finishBookModal";
import { Timer } from "../../components/timer";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import logoImg from "@/app/assets/logo.svg";
import editIcon from "@/app/icons/edit.svg";
import arrowLeftIcon from "@/app/icons/arrow-left.svg";
import arrowRightIcon from "@/app/icons/arrow-right.svg";
import { differenceInSeconds } from "date-fns";

const answerFormSchema = z.object({
  answer: z.string().min(1).max(300),
});

type AnswerFormData = z.infer<typeof answerFormSchema>;

export default function Questions() {
  const router = useRouter();
  const { id: bookId } = useParams();
  const searchParams = useSearchParams();
  const { questionsBooks, setQuestionAnswer, setQuestionTimeSpent } =
    useContext(QuestionsBooksContext);

  const questionIndex = searchParams.get("question") || "1";
  const questionsBook = questionsBooks.filter((book) => book.id === bookId)[0];
  const questionsNumber = questionsBook.questions.length;
  const currentQuestion: QuestionType =
    questionsBook.questions[Number(questionIndex) - 1];

  const isFirstQuestion = Number(questionIndex) === 1;
  const isLastQuestion = Number(questionIndex) === questionsNumber;

  const questionIndexFormatted = questionIndex.padStart(2, "0");
  const questionsNumberFormatted = questionsNumber.toString().padStart(2, "0");

  const { register, handleSubmit, reset, setValue, watch } = useForm<AnswerFormData>({
    resolver: zodResolver(answerFormSchema),
    defaultValues: {
      answer: ''
    }
  });

  const answerField = watch('answer')
  const answerFieldLength = answerField.length

  const [secondsPassed, setSecondsPassed] = useState(currentQuestion.timeSpent);

  useEffect(() => {
    const timerStarted = new Date();

    const interval = setInterval(() => {
      const secondsDifference = differenceInSeconds(new Date(), timerStarted);

      setSecondsPassed(currentQuestion.timeSpent + secondsDifference);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setSecondsPassed, currentQuestion]);

  useEffect(() => {
    setValue("answer", currentQuestion.answer);
  }, [currentQuestion, setValue]);

  function handleSubmitAnswer(data: AnswerFormData) {
    setQuestionAnswer({
      bookId: questionsBook.id,
      questionIndex: Number(questionIndex) - 1,
      answer: data.answer,
    });

    setQuestionTimeSpent({
      bookId: questionsBook.id,
      questionIndex: Number(questionIndex) - 1,
      timeSpent: secondsPassed,
    });

    goToNextQuestion()
    reset();
  }

  function goToNextQuestion() {
    if (isLastQuestion) return;

    setQuestionTimeSpent({
      bookId: questionsBook.id,
      questionIndex: Number(questionIndex) - 1,
      timeSpent: secondsPassed,
    });

    router.push(`?question=${Number(questionIndex) + 1}`);
  }

  function goToPreviousQuestion() {
    if (isFirstQuestion) return;

    setQuestionTimeSpent({
      bookId: questionsBook.id,
      questionIndex: Number(questionIndex) - 1,
      timeSpent: secondsPassed,
    });

    router.push(`?question=${Number(questionIndex) - 1}`);
  }

  return (
    <div>
      <header className="flex w-full max-w-[1235px] border-b border-gray-300 mx-auto pt-8 pb-4">
        <Image className="mx-auto" src={logoImg} alt="Estudologia" />
      </header>
      <div className="flex justify-center w-full max-w-[1235px] h-[42px] mx-auto mt-5 relative">
        <div className="flex flex-wrap content-center gap-4">
          <Image src={editIcon} alt="Lápis" />
          <h1 className="text-purple-900 font-bold text-base">
            {questionsBook.title}
          </h1>
        </div>
        <Timer secondsPassed={secondsPassed} />
      </div>
      <main className="w-[750px] mx-auto mt-16">
        <h2 className="font-bold">
          {currentQuestion.title} {questionIndexFormatted}/
          {questionsNumberFormatted}
        </h2>
        <p className="mt-4 text-black">{currentQuestion.text}</p>
        <form className="relative" onSubmit={handleSubmit(handleSubmitAnswer)} id="answer-form">
          <textarea
            className="resize-none outline-none bg-gray-100 rounded-[5px] p-3 pr-24 mt-6 mb-10 w-full h-[196px] text-sm"
            placeholder="Escreva sua resposta aqui"
            maxLength={300}
            {...register("answer")}
          />
          <span className="absolute right-4 top-8 text-sm">{answerFieldLength}/300</span>
        </form>

        {isLastQuestion ? (
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button
                className="bg-gradient-to-r from-purple-400 to-purple-300 font-bold text-white rounded-full py-2 px-10"
                type="submit"
                form="answer-form"
              >
                Enviar resposta e finalizar
              </button>
            </Dialog.Trigger>

            <FinishBookModal />
          </Dialog.Root>
        ) : (
          <button
            className="bg-gradient-to-r from-purple-400 to-purple-300 font-bold text-white rounded-full py-2 px-10"
            type="submit"
            form="answer-form"
          >
            Enviar resposta
          </button>
        )}

        <footer className="mt-8 border-t-2 border-gray-100 flex pt-6">
          {!isFirstQuestion && (
            <div
              onClick={goToPreviousQuestion}
              className="flex flex-wrap gap-2 content-center font-inter cursor-pointer"
            >
              <Image src={arrowLeftIcon} width={16} height={10} alt="Anterior" />
              <span>Anterior</span>
            </div>
          )}
          {!isLastQuestion && (
            <div
              onClick={goToNextQuestion}
              className="flex flex-wrap gap-2 content-center font-inter ml-auto cursor-pointer"
            >
              <span>Próxima</span>
              <Image src={arrowRightIcon} width={16} height={10} alt="Próxima" />
            </div>
          )}
        </footer>
      </main>
    </div>
  );
}
