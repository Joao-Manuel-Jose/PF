import { Navbar } from "../Components/Header/navbar";

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
      <div ><Navbar/>{children}</div>
    
  );
}