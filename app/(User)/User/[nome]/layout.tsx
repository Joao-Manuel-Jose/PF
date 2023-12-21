import { UserNav } from "@/app/Components/Header/User/user";

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
      <div className=""><UserNav/>{children}</div>
    
  );
}