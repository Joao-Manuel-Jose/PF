import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Buttonl({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className=" text-  hover:translate-x-1 rounded-full
    transition-all focus:border-white-500  focus:border-white-500
    hover:brightness-90 cursor-pointer z-10 mx-auto h-10 w-[200px]   bg-sky-300 text-center  text-white font-bold   mt-3 shadow">
      {children}
    </button>
  )
}
