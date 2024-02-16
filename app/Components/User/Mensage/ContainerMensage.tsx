import { Children, FormHTMLAttributes, ReactNode } from "react"
interface FormProps extends FormHTMLAttributes<HTMLFormElement>{
    children:ReactNode
}
export function ContainerMensage({ children, ...props }: FormProps) {
    return (
    
        <div className="    rounded-2xl shadow-md flex items-center justify-center  ps-2 py-2">
          <form method="POST" action="#" className="flex gap-2  items-center" {...props}>
            {children}
          </form>
        </div>
     
    );
  }
  