import { InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    children:ReactNode
}

export function InputL({children, ...props }: InputProps) {
  return (
    <div className="hover:ring-1 hover:ring-orange-300   md:mx-auto bg-white  rounded-2xl shadow my-3 ">
        <div className='flex items-center '>
    <span className="flex-shrink-0 ps-1 ">
        {children}
   
       
    </span>
    <input
      className="mx-auto h-10  w-[100%] rounded-2xl
         text-gray-700 outline-none bg-transparent  py-1
       px-2  "
      {...props} required
    />
    </div>
    </div>
  )
}



