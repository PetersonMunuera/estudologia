"use client";

// import { useParams } from "next/navigation"
import Image from "next/image";
import logoImg from "@/app/assets/logo.svg";
import editIcon from "@/app/icons/edit.svg";
import clockIcon from "@/app/icons/clock.svg";
import arrowLeftIcon from "@/app/icons/arrow-left.svg";
import arrowRightIcon from "@/app/icons/arrow-right.svg";
import Link from "next/link";

export default function Questions() {
  // const { id } = useParams()

  return (
    <div>
      <header className="flex w-full max-w-[1235px] border-b border-gray-300 mx-auto pt-8 pb-4">
        <Image className="mx-auto" src={logoImg} alt="Estudologia" />
      </header>
      <div className="flex justify-center w-full max-w-[1235px] h-[42px] mx-auto mt-5 relative">
        <div className="flex flex-wrap content-center gap-4">
          <Image src={editIcon} alt="Lápis" />
          <h1 className="text-purple-900 font-bold text-base">
            Título do caderno de questões 3
          </h1>
        </div>
        <div className="flex gap-2 py-2 px-5 border border-gray-500 rounded-[10px] absolute right-0">
          <Image src={clockIcon} alt="Relógio" />
          <div className="flex flex-wrap text-sm content-center">
            <span>00</span>:<span>00</span>:<span>00</span>
          </div>
        </div>
      </div>
      <main className="w-[750px] mx-auto mt-16">
        <h2 className="font-bold">TÍTULO DA PERGUNTA 01/03</h2>
        <p className="mt-4 text-black">
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <textarea
          className="resize-none outline-none bg-gray-100 rounded-[5px] p-3 mt-6 mb-10 w-full h-[196px] text-sm"
          placeholder="Escreva sua resposta aqui"
          name="answer"
        />
        <button className="bg-gradient-to-r from-purple-400 to-purple-300 font-bold text-white rounded-full py-2 px-10">
          Enviar resposta
        </button>
        <footer className="mt-8 border-t-2 border-gray-100 flex justify-between pt-6">
          <Link href="?question=1" className="flex flex-wrap gap-2 content-center font-inter">
            <Image src={arrowLeftIcon} alt="Anterior" />
            <span>Anterior</span>
          </Link>
          <Link href="?question=2" className="flex flex-wrap gap-2 content-center font-inter">
            <span>Próxima</span>
            <Image src={arrowRightIcon} alt="Próxima" />
          </Link>
        </footer>
      </main>
    </div>
  );
}
