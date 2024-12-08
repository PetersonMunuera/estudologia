'use client'

import Link from "next/link";
import { Header } from "./components/header";
import { QuestionsBook } from "./components/questionsBook";
import { useState } from "react";

export default function Home() {
  const [filterList, setFilterList] = useState(false)
  
  const questionsBookList = [
    {
      answered: true,
      questionsNumber: 10,
      title: "Título do caderno de questões 1",
    },
    {
      answered: true,
      questionsNumber: 8,
      title: "Título do caderno de questões 2",
    },
    {
      answered: false,
      questionsNumber: 15,
      title: "Título do caderno de questões 3",
    },
  ]

  return (
    <div>
      <Header />
      <div className="w-[966px] mx-auto">
        <nav className="my-10 flex gap-10 text-xl font-bold text-gray-200">
          <Link
            href="/"
            className="text-purple-300 pb-1 border-b border-purple-300"
          >
            Questões
          </Link>
          <Link href="/answers">Respostas</Link>
        </nav>
        <main>
          <form className="flex gap-2">
            <input type="checkbox" name="filter" id="filter" onChange={() => setFilterList(!filterList)} />
            <label
              className="select-none text-purple-900 font-light"
              htmlFor="filter"
            >
              Mostrar apenas questões não respondidas
            </label>
          </form>
          <div className="grid grid-cols-3 gap-8 mt-5">
            {questionsBookList.filter(questionsBook => filterList ? !questionsBook.answered : true).map(questionsBook => (
              <QuestionsBook key={questionsBook.title} bookData={questionsBook}/>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
