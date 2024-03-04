import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <footer className="mt-1 flex flex-col items-center justify-center bg-gray-300 pb-[20px] pt-[50px] md:px-[20px] lg:px-[65px]">
      {children}
    </footer>
  )
}
