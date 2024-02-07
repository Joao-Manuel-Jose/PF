import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function InputL({ ...props }: InputProps) {
  return (
    <input
      className="mx-auto h-10  w-[100%] rounded-2xl
         text-gray-700 outline-none focus:ring-1 shadow bg-white py-1
       px-2  my-3 md:w-[70%] "
      {...props} required
    />
  )
}
