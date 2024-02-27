import Image from "next/image";


export function PicUser({src}:{
    src:string
}){
    return(
        <div className="relative ml-3">
        <div>
          <button type="button" className="  shadow-lg  flex rounded-full bg-white text-sm focus:outline-none ring-2 ring-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            <span className="absolute-inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
  
            <Image src={src} alt="usuario" width={250} height={250} className=" h-24 w-24 sm:h-40 sm:w-40 rounded-full" priority placeholder="blur" blurDataURL="blur" />
            </button>
          </div>
        </div>
    )
}

export function PicUserPf({src}:{
  src:string
}){
  return(
      <div className="relative ml-3">
      <div>
        <button type="button" className="  shadow-sm  flex rounded-full bg-white text-sm focus:outline-none ring-2 ring-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
          <span className="absolute-inset-1.5"></span>
          <span className="sr-only">Open user menu</span>

          <Image src={src} alt="usuario" width={200} height={200} className=" h-20 w-20  rounded-full"/>
          </button>
        </div>
      </div>
  )
}