import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className=" text-center 
    font-montserrat text-lg font-extrabold uppercase 
     my-5 text-black-100  md:text-3xl">
      {children}
    </h2>
  )
}
