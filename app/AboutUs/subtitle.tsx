import { ReactNode } from 'react'

export function Subtitle({ children }: { children: ReactNode }) {
  return (
    <h5 className=" text-center font-montserrat text-md font-extrabold  mx-auto
    uppercase  my-5 text-gray-500 md:text-xl " >
      {children}
    </h5>
  )
4}