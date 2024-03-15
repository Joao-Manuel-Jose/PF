import { ReactNode } from 'react'

export function CopyrightWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="w-full bg-white  p-2 mt-5 flex items-center 
    justify-center text-gray-700   
    rounded-lg
    ">
      {children}
    </section>
  )
}
