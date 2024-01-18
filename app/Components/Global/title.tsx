import { ReactNode } from 'react'

export function TitleG({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-center text-lg font-black uppercase   md:text-2xl xl:text-4xl">
      {children}
    </h1>
  )
}