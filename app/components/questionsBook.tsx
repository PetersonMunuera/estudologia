'use client'

import Image from "next/image";
import editIcon from "@/app/icons/edit.svg";
import { useRouter } from "next/navigation";
import { QuestionsBookType } from "../@types/questionsBook";
interface QuestionsBookProps {
  bookData: QuestionsBookType
}

export function QuestionsBook({ bookData }: QuestionsBookProps) {
  const router = useRouter()
  const questionsNumber = bookData.questions.length

  return (
    <div className="border border-gray-300 rounded-[20px] p-6 flex flex-col gap-5">
      <Image width={18} height={18} src={editIcon} alt="Lápis" />
      <div>
        <h2 className="font-bold text-purple-900">
          {bookData.title}
        </h2>
        <strong className={`text-[0.625rem] ${bookData.answered ? 'text-green-500 bg-green-100' : 'text-yellow-500 bg-yellow-100'} rounded-sm py-[0.125rem] px-2`}>
          {bookData.answered ? 'Respondido' : 'Não respondido'}
        </strong>
      </div>
      <div className="font-inter font-medium text-[0.75rem]">
        <span>{questionsNumber}</span> questões
      </div>
      <button
        className="enabled:bg-gradient-to-r from-purple-400 to-purple-300 font-bold text-white rounded-full p-2 disabled:cursor-not-allowed disabled:bg-purple-100"
        disabled={bookData.answered}
        onClick={() => router.push(`/book/${bookData.id}`)}
      >
        Responder
      </button>
    </div>
  );
}
