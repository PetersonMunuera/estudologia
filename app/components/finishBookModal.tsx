"use client";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import trophyImage from "@/app/assets/trophy.svg";
import clockIcon from "@/app/icons/clock.svg";
import { useContext } from "react";
import { QuestionsBooksContext } from "../contexts/questionsBooksContext";
import { useParams, useRouter } from "next/navigation";

export function FinishBookModal() {
  const { questionsBooks, setQuestionsBookAsAnswered } = useContext(QuestionsBooksContext)
  const { id: bookId } = useParams();
  const router = useRouter();
  
  const questionsBook = questionsBooks.filter((book) => book.id === bookId)[0];

  function finishBook() {
    setQuestionsBookAsAnswered(questionsBook.id)

    const hasBookToAnswer = questionsBooks.filter(book => !book.answered)

    const route = !hasBookToAnswer.length ? '/answers' : '/'

    router.replace(route)
  }

  const totalMinutesAmount = questionsBook.questions.reduce((minutes, question) => {
    return minutes + question.timeSpent / 60
  }, 0)

  const totalMinutes = String(Math.floor(totalMinutesAmount)).padStart(2, '0')

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed w-screen h-screen bg-black opacity-25 inset-0" />

      <Dialog.Content className="w-full max-w-[838px] bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[50px] p-20 flex flex-col flex-wrap gap-8 text-center">
        <Image className="mx-auto" src={trophyImage} alt="Troféu" />
        <div>
          <Dialog.Title className="font-bold text-[1.875rem] text-purple-300">
            Agradecemos sua participação!
          </Dialog.Title>
          <Dialog.Description className="text-xl">
            Respostas enviadas com sucesso
          </Dialog.Description>
        </div>
        <div className="flex flex-wrap gap-1 content-center mx-auto">
          <Image src={clockIcon} alt="Relógio" />
          <span className="text-sm leading-normal">{totalMinutes} min de prova</span>
        </div>
        <Dialog.Close asChild>
          <button
            onClick={finishBook}
            className="border border-purple-500 text-purple-500 font-bold text-sm rounded-full py-2 px-[86px] w-fit mx-auto hover:bg-purple-500 hover:text-white transition-all"
          >
            Valeu!
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
