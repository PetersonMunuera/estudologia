'use client'
import { createContext, ReactNode, useState } from "react"
import { QuestionsBookType } from "../@types/questionsBook"
import { questionsBooksData } from "./data"

interface QuestionsBooksContextType {
  questionsBooks: QuestionsBookType[]
}

export const QuestionsBooksContext = createContext({} as QuestionsBooksContextType)

interface QuestionsBooksProvider {
  children: ReactNode
}

export function QuestionsBooksProvider({ children }: QuestionsBooksProvider) {
  const [questionsBooks, setQuestionsBooks] = useState<QuestionsBookType[]>(questionsBooksData)

  return (
    <QuestionsBooksContext.Provider value={{ questionsBooks }}>
      {children}
    </QuestionsBooksContext.Provider>
  )
}