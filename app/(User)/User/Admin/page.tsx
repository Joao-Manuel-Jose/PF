import CardWrapper from "@/app/Components/Admin/dashboard/cards";
import { SectionPhoto } from "@/app/Components/Admin/dashboard/userPhoto";

export default function PageAdmin() {
    return (
        <div className=''>
        <h1 className=' mb-4 text-xl md:text-2xl'>
             Dashboard
         </h1>
        <SectionPhoto src="/gelsondevelop.JPG"/>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      <CardWrapper  />
    
  </div>
  </div>
    )
 
  }