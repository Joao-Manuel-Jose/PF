import { ReactNode } from 'react'

export function TitlePublic({ children }: { children: ReactNode }) {
  return (
    <div className='my-2 grid justify-center'>
        <div  className='my-2 grid justify-center'>
        <hr className='h-2 my-1  py-1 rounded bg-orange-300 w-[16rem]' />
        </div>
    
    <h1 className="text-center text-lg text-orange-300 font-black uppercase   md:text-2xl xl:text-4xl">
      {children}
    </h1>
    </div>
 
  )
}