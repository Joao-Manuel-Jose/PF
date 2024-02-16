import Link from 'next/link'
import { ReactNode } from 'react'

export function ButtonC({ children }: { children: ReactNode }) {
  return (
    <Link
      className="w-56 h-8 mx-auto md:mx-0 hover:translate-x-1 transition-all focus:border-sky-500 flex items-center justify-center rounded-full border-2 border-white px-8 py-2 text-[0.88rem] font-bold uppercase text-white"
      href="/Home/"
    >
      {children}
    </Link>
  )
}