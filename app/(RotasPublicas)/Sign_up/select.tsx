import { SelectHTMLAttributes, ReactNode } from 'react'
interface SelctProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children: ReactNode
  }
export function Select({children, ...props}:SelctProps){
    return(
        <select className="mx-auto h-10 w-[100%] rounded-2xl
        text-gray-700 cursor-pointer outline-none focus:ring-1 shadow bg-white py-1
      px-2 md:w-full"  required  {...props}>
            {children}
        </select>
    )

}