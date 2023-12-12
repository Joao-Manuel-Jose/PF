import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className="hover:brightness-90 cursor-pointer z-10 mx-auto h-10 w-[200px] rounded-lg bg-white   text-black-300 mt-3 shadow">
      {children}
    </button>
  )
}
