import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...props }: InputProps) {
  return (
    <input
      className="mx-auto h-10 w-[100%] rounded-2xl
         text-gray-700 outline-none ring-1 focus:ring-orange-300 shadow bg-white py-1
         sm:w-[100%]
       px-2 md:w-[100%] lg:w-[21rem] "
      {...props} required
    />
  )
}
