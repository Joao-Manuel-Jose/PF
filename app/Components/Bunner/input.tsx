import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function InputB({ ...props }: InputProps) {
  return (
    <input
    className="appearance-none bg-transparent border-none w-full 
    text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
      {...props} required title='Digite o que buscas'
    />
  )
}
