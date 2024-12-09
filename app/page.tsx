"use client";
import { Header } from "./components/header";
import { NavigationMenu } from "./components/navigationMenu";
import { QuestionsBook } from "./components/questionsBook";
import { useState } from "react";

export default function Home() {
  const [filterNotAnswered, setFilterNotAnswered] = useState(false);

  const questionsBookList = [
    {
      id: 1,
      answered: true,
      questionsNumber: 10,
      title: "Título do caderno de questões 1",
    },
    {
      id: 2,
      answered: true,
      questionsNumber: 8,
      title: "Título do caderno de questões 2",
    },
    {
      id: 3,
      answered: false,
      questionsNumber: 15,
      title: "Título do caderno de questões 3",
    },
  ];

  return (
    <div>
      <Header />
      <div className="w-[966px] mx-auto">
        <NavigationMenu />
        <main>
          <form className="flex gap-2">
            <input
              type="checkbox"
              name="filter"
              id="filter"
              onChange={() => setFilterNotAnswered(!filterNotAnswered)}
            />
            <label
              className="select-none text-purple-900 font-light"
              htmlFor="filter"
            >
              Mostrar apenas questões não respondidas
            </label>
          </form>
          <div className="grid grid-cols-3 gap-8 mt-5">
            {questionsBookList
              .filter((questionsBook) => filterNotAnswered ? !questionsBook.answered : true)
              .map((questionsBook) => (
                <QuestionsBook
                  key={questionsBook.title}
                  bookData={questionsBook}
                />
              ))}
          </div>
        </main>
      </div>
    </div>
  );
}
