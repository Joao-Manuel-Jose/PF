import { TextareaHTMLAttributes, } from 'react'


type TetxProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export function InputMensagge({...props}:TetxProps){

  
    return(
        <textarea
      
        className=" resize-none h-8 mx-auto  w-[100%] rounded-2xl
        text-gray-700 outline-none   bg-white py-1
      px-2 md:w-full  "
      {...props} required 
    />
  )
    
}
