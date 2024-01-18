import { TitleG } from "@/app/Components/Global/title";
import { X } from "lucide-react";

export function HeaderMenssageF(){
    const title='Mensagens'
    return(
        <div className="bg-white z-50 shadow-sm  cursor-pointer p-2 pb-3 top-0 fixed-top border-b border-gray-300  ">
        <X className="text-red-700  text-md "  />
        <TitleG >{title}</TitleG>
    </div>
    )
}