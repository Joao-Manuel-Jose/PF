import { ReactNode } from 'react'

export function ParagraphPf({ children }: { children: ReactNode }) {
  return (
    <p className=" mx-auto md:mx-0 text-center text-base font-normal text-gray-500  md:text-left md:text-sm">
      {children}
    </p>
  )
}
