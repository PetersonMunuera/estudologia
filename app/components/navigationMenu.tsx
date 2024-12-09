'use client'
import Link from "next/link";
import { usePathname  } from "next/navigation";

export function NavigationMenu() {
  const currentPath = usePathname()

  const pages = [
    {
      name: "Questões",
      url: '/',
    },
    {
      name: "Respostas",
      url: '/answers',
    },
  ]

  return (
    <nav className="my-10 flex gap-10 text-xl font-bold text-purple-100">
      {pages.map(page => (
        <Link
          key={page.url}
          href={page.url}
          className={`${currentPath === page.url && 'text-purple-300 pb-1 border-b border-purple-300'}`}
        >
          {page.name}
        </Link>
      ))}
    </nav>
  );
}
