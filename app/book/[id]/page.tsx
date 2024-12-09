"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useParams } from "next/navigation"
import { useSearchParams } from "next/navigation";
import { useContext } from "react";
import { QuestionsBooksContext } from "@/app/contexts/questionsBooksContext";
import { QuestionType } from "@/app/@types/questionsBook";
import { FinishBookModal } from "@/app/components/finishBookModal";
import Image from "next/image";

import logoImg from "@/app/assets/logo.svg";
import editIcon from "@/app/icons/edit.svg";
import clockIcon from "@/app/icons/clock.svg";
import arrowLeftIcon from "@/app/icons/arrow-left.svg";
import arrowRightIcon from "@/app/icons/arrow-right.svg";

export default function Questions() {
  const { id: bookId } = useParams()
  const searchParams = useSearchParams()
  const { questionsBooks } = useContext(QuestionsBooksContext)

  const questionIndex = searchParams.get('question') || "1"
  const questionsBook = questionsBooks.filter(book => book.id === bookId)[0]
  const questionsNumber = questionsBook.questions.length
  const currentQuestion: QuestionType = questionsBook.questions[Number(questionIndex)-1]

  const isFirstQuestion = Number(questionIndex) === 1
  const isLastQuestion = Number(questionIndex) === questionsNumber

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
        <div className="flex gap-2 py-2 px-5 border border-gray-500 rounded-[10px] absolute right-0">
          <Image src={clockIcon} alt="Relógio" />
          <div className="flex flex-wrap text-sm leading-normal content-center">
            <span>00</span>:<span>00</span>:<span>00</span>
          </div>
        </div>
      </div>
      <main className="w-[750px] mx-auto mt-16">
        <h2 className="font-bold">{currentQuestion.title} {questionIndex}/{questionsNumber}</h2>
        <p className="mt-4 text-black">
          {currentQuestion.text}
        </p>
        <textarea
          className="resize-none outline-none bg-gray-100 rounded-[5px] p-3 mt-6 mb-10 w-full h-[196px] text-sm"
          placeholder="Escreva sua resposta aqui"
          name="answer"
        />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="bg-gradient-to-r from-purple-400 to-purple-300 font-bold text-white rounded-full py-2 px-10">
              Enviar resposta
            </button>
          </Dialog.Trigger>

          <FinishBookModal />
        </Dialog.Root>

        <footer className="mt-8 border-t-2 border-gray-100 flex pt-6">
          {!isFirstQuestion && (
            <Link
              href={`?question=${Number(questionIndex)-1}`}
              className="flex flex-wrap gap-2 content-center font-inter"
            >
              <Image src={arrowLeftIcon} alt="Anterior" />
              <span>Anterior</span>
            </Link>
          )}
          {!isLastQuestion && (
            <Link
              href={`?question=${Number(questionIndex)+1}`}
              className="flex flex-wrap gap-2 content-center font-inter ml-auto"
            >
              <span>Próxima</span>
              <Image src={arrowRightIcon} alt="Próxima" />
            </Link>
          )}
        </footer>
      </main>
    </div>
  );
}
