import { Children, FormHTMLAttributes, ReactNode } from "react"
interface FormProps extends FormHTMLAttributes<HTMLFormElement>{
    children:ReactNode
}
export function ContainerMensage({ children, ...props }: FormProps) {
    return (
    
        <div className="   bg-white rounded-2xl shadow-md ring-1 focus:ring-sky-500 p-0">
          <form method="POST" action="#" className="flex   items-center" {...props}>
            {children}
          </form>
        </div>
     
    );
  }
  