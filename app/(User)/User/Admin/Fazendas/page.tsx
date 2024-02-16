import CardWrapper from "@/app/Components/Admin/dashboard/cards";

export default function PageAdminF() {
    return (
        <div className=''>
        <h1 className=' mb-4 text-xl md:text-2xl'>
             Fazendas
         </h1>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      <CardWrapper  />
    
  </div>
  </div>
    )
 
  }