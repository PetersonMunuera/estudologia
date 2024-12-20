"use client";
import { useContext, useState } from "react";
import { QuestionsBooksContext } from "./contexts/questionsBooksContext";
import { Header } from "./components/header";
import { NavigationMenu } from "./components/navigationMenu";
import { QuestionsBook } from "./components/questionsBook";

export default function Home() {
  const [filterNotAnswered, setFilterNotAnswered] = useState(false);

  const { questionsBooks } = useContext(QuestionsBooksContext)

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
            {questionsBooks
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
