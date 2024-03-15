import { ReactNode } from 'react'
import Image from 'next/image'

export function ContainerProducts({ children }: { children: ReactNode }) {
  return (
    <div className="sm:mx-1 mx-0 max-w-sm  rounded-xl overflow-hidden shadow-lg bg-gray-50   border border-black-200 ">
    
    
      {children}
   
     
     
  </div>
  )
}
