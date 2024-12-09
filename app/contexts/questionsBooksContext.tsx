"use client";
import { createContext, ReactNode, useState } from "react";
import { QuestionsBookType } from "../@types/questionsBook";
import { questionsBooksData } from "./data";

interface QuestionsBooksContextType {
  questionsBooks: QuestionsBookType[];
  setQuestionAnswer: (answerData: {
    bookId: string;
    questionIndex: number;
    answer: string;
  }) => void;
  setQuestionTimeSpent: (answerData: {
    bookId: string;
    questionIndex: number;
    timeSpent: number;
  }) => void;
  setQuestionsBookAsAnswered: (bookId: string) => void;
}

export const QuestionsBooksContext = createContext(
  {} as QuestionsBooksContextType
);

interface QuestionsBooksProvider {
  children: ReactNode;
}

export function QuestionsBooksProvider({ children }: QuestionsBooksProvider) {
  const [questionsBooks, setQuestionsBooks] = useState<QuestionsBookType[]>(questionsBooksData);

  function setQuestionAnswer(answerData: {
    bookId: string;
    questionIndex: number;
    answer: string;
  }) {
    const { bookId, answer, questionIndex } = answerData;

    const updatedQuestionsBooks = [...questionsBooks];

    updatedQuestionsBooks.forEach((book) => {
      if (book.id === bookId) {
        const question = book.questions[questionIndex];

        const updatedQuestion = {
          ...question,
          answer,
        };

        book.questions[questionIndex] = updatedQuestion;
      }
    });

    setQuestionsBooks(updatedQuestionsBooks);
  }

  function setQuestionTimeSpent(answerData: {
    bookId: string;
    questionIndex: number;
    timeSpent: number;
  }) {
    const { bookId, timeSpent, questionIndex } = answerData;

    const updatedQuestionsBooks = [...questionsBooks];

    updatedQuestionsBooks.forEach((book) => {
      if (book.id === bookId) {
        const question = book.questions[questionIndex];

        const updatedQuestion = {
          ...question,
          timeSpent,
        };

        book.questions[questionIndex] = updatedQuestion;
      }
    });

    setQuestionsBooks(updatedQuestionsBooks);
  }

  function setQuestionsBookAsAnswered(bookId: string) {
    const updatedQuestionsBooks = [...questionsBooks];

    updatedQuestionsBooks.forEach((book) => {
      if (book.id === bookId) {
        book.answered = true;
      }
    });

    setQuestionsBooks(updatedQuestionsBooks);
  }

  return (
    <QuestionsBooksContext.Provider
      value={{
        questionsBooks,
        setQuestionAnswer,
        setQuestionTimeSpent,
        setQuestionsBookAsAnswered,
      }}
    >
      {children}
    </QuestionsBooksContext.Provider>
  );
}
