import { ReactNode } from 'react'

export function TitleAboutUs({ children }: { children: ReactNode }) {
  return (
    <h2 className=" text-center font-montserrat text-lg font-extrabold 
    uppercase  my-5 text-white md:text-2xl" >
      {children}
    </h2>
  )
}