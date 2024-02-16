import { Clock, LucideBanknote, LucideBox, LucideCopy } from "lucide-react";

const iconMap = {
  collected:<LucideBanknote/>,
  customers: <LucideCopy/>,
  pending: <Clock/>,
  invoices: <LucideBox/>,
};

export default async function CardWrapper() {
  
  return (
    <>
    

       <Card title="Entrada" value={900} type="collected" />
      <Card title="Pendente" value={400} type="pending" />
      <Card title="Caixa" value={300} type="invoices" />
      <Card
        title="Total"
        value={500}
        type="customers"
      /> 
    </>
  );
}


export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? 
        <Icon.type className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p className='
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl'
      >
        {value}
      </p>
    </div>
  );
}
