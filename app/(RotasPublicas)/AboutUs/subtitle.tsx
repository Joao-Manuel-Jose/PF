import { ReactNode } from 'react'

export function Subtitle({ children }: { children: ReactNode }) {
  return (
    <h5 className=" text-center font-montserrat text-md font-extrabold  mx-auto
    my-3  uppercase text-gray-500 md:text-xl text-md " >
      {children}
    </h5>
  )
4}