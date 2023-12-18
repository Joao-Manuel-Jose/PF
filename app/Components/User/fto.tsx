import Image from "next/image";


export function PicUser({src}:{
    src:string
}){
    return(
        <div className="relative ml-3">
        <div>
          <button type="button" className="shadow-lg relative flex rounded-full bg-white text-sm focus:outline-none ring-2 ring-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            <span className="absolute-inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
  
            <Image src={src} alt="usuario" width={250} height={250} className="md:h-60 md:w-50 rounded-full"/>
            </button>
          </div>
        </div>
    )
}