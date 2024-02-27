import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function InputPf({ ...props }: InputProps) {
  return (
    <input
      className="mx-auto h-10 w-[100%] rounded-2xl
         text-gray-700 outline-none focus:ring-1 shadow bg-white py-1
         sm:w-[100%]
       px-2 md:w-[100%] "
      {...props} required
    />
  )
}
