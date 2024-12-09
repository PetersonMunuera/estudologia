"use client";
import { createContext, ReactNode, useState } from "react";
import { QuestionsBookType } from "../@types/questionsBook";
import { questionsBooksData } from "./data";

interface QuestionsBooksContextType {
  questionsBooks: QuestionsBookType[];
  setQuestionAnswer: (answerData: {
    bookId: string;
    questionIndex: number;
    answerText: string;
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
  const [questionsBooks, setQuestionsBooks] =
    useState<QuestionsBookType[]>(questionsBooksData);

  function setQuestionAnswer(answerData: {
    bookId: string;
    questionIndex: number;
    answerText: string;
    timeSpent: number;
  }) {
    const updatedQuestionsBooks = [...questionsBooks];

    updatedQuestionsBooks.forEach((book) => {
      if (book.id === answerData.bookId) {
        const question = book.questions[answerData.questionIndex];

        const updatedQuestion = {
          ...question,
          answer: answerData.answerText,
          timeSpent: answerData.timeSpent,
        };

        book.questions[answerData.questionIndex] = updatedQuestion;
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
        setQuestionsBookAsAnswered,
      }}
    >
      {children}
    </QuestionsBooksContext.Provider>
  );
}
