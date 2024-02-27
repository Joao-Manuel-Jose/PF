import Link from 'next/link';
import { PowerOffIcon, PowerSquareIcon } from 'lucide-react';
import { ReactNode } from 'react';


export default function LinKroute({children,title}:{children:ReactNode,title:string}) {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="hidden md:flex mb-2 flex h-20 items-end justify-start rounded-md bg-orange-300 p-2  md:h-40"
        href="#"
      >
        <div className="w-32 text-white md:w-40">
          {title}
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
       {children}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerSquareIcon className="w-6" />
            <div className="hidden md:block">Sair</div>
          </button>
        </form>
      </div>
    </div>
  );
}
