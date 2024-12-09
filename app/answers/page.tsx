"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import FeatherIcon from "feather-icons-react";
import { Header } from "../components/header";
import { NavigationMenu } from "../components/navigationMenu";

export default function AnswersPage() {
  const searchParams = useSearchParams();
  const bookParam = searchParams.get("book") || "1";
  const books = [
    {
      id: "1",
      title: "Caderno de questões 1",
      questions: [
        {
          title: "Título da pergunta 01 book 1",
          answer: "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        },
        {
          title: "Título da pergunta 02 book 1",
          answer: "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        },
        {
          title: "Título da pergunta 03 book 1",
          answer: "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        },
      ],
    },
    {
      id: "2",
      title: "Caderno de questões 2",
      questions: [
        {
          title: "Título da pergunta 01 book 2",
          answer: "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        },
        {
          title: "Título da pergunta 02 book 2",
          answer: "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        },
        {
          title: "Título da pergunta 03 book 2",
          answer: "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        },
      ],
    },
    {
      id: "3",
      title: "Caderno de questões 3",
      questions: [
        {
          title: "Título da pergunta 01 book 3",
          answer: "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        },
        {
          title: "Título da pergunta 02 book 3",
          answer: "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        },
        {
          title: "Título da pergunta 03 book 3",
          answer: "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        },
      ],
    },
  ];

  const currentQuestions = books.find(book => book.id === bookParam)?.questions

  return (
    <div>
      <Header />
      <main className="w-[966px] mx-auto">
        <NavigationMenu />
        <nav className="flex justify-between text-lg font-bold text-purple-100">
          {books.map((book) => (
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
