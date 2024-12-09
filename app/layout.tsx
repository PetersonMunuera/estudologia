import { Chivo, Inter } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";
import { QuestionsBooksProvider } from './contexts/questionsBooksContext';

export const metadata: Metadata = {
  title: "Estudologia",
  description: "Criado por Peterson Munuera",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${inter.variable} ${chivo.variable} font-chivo`}
      >
        <QuestionsBooksProvider>
          {children}
        </QuestionsBooksProvider>
      </body>
    </html>
  );
}
