interface QuestionType {
  title: string;
  answer: string;
  timeSpent: number;
}

export interface QuestionsBookType {
  id: string;
  title: string;
  answered: boolean;
  questions: QuestionType[]
}