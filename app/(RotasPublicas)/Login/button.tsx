import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Buttonl({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className=" text-center
    hover:brightness-90 cursor-pointer z-10 mx-auto h-10 w-[200px] rounded-lg  bg-gray-300 text-center  text-black-300 mt-3 shadow">
      {children}
    </button>
  )
}
