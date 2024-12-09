"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import FeatherIcon from "feather-icons-react";
import { Header } from "../components/header";
import { NavigationMenu } from "../components/navigationMenu";
import { useContext } from "react";
import { QuestionsBooksContext } from "../contexts/questionsBooksContext";
import { Timer } from "../components/timer";

export default function AnswersPage() {
  const searchParams = useSearchParams();
  const bookParam = searchParams.get("book") || "1";

  const { questionsBooks } = useContext(QuestionsBooksContext)

  const currentBook = questionsBooks.filter(book => book.id === bookParam)[0]
  const currentQuestions = currentBook.questions

  const secondsPassed = currentQuestions.reduce((seconds, question) => {
    return seconds + question.timeSpent
  }, 0)

  return (
    <div>
      <Header />
      <main className="w-[966px] mx-auto">
        <NavigationMenu />
        <nav className="flex justify-between text-lg font-bold text-purple-100">
          {questionsBooks.map((book) => (
            <Link
              key={book.id}
              href={`?book=${book.id}`}
              className={`flex flex-wrap gap-2 content-center pb-1 border-b ${
                book.id === bookParam
                  ? "text-purple-300 border-purple-300"
                  : "border-transparent"
              }`}
            >
              <FeatherIcon icon="edit-2" />
              <span>{book.title}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-10">
        <div className="flex mb-10">
          <Timer secondsPassed={secondsPassed} />
        </div>
          {currentQuestions?.map((question, index) => (
            <div key={question.title} className={`pb-12 mb-4 ${index != currentQuestions.length-1 && 'border-b-2 border-gray-100'}`}>
              <h2 className="font-bold text-black">{question.title}</h2>
              <span className="my-5 block text-sm">Resposta:</span>
              <p className="text-sm">{question.answer}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
