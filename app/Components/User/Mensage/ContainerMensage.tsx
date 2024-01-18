import { Children, FormHTMLAttributes, ReactNode } from "react"
interface FormProps extends FormHTMLAttributes<HTMLFormElement>{
    children:ReactNode
}
export function ContainerMensage({ children, ...props }: FormProps) {
    return (
      <div className="fixed bottom-0 w-2/3">
        <div className="w-90 mx-auto bg-white rounded-2xl shadow-md ring-1 focus:ring-sky-500 p-4">
          <form method="POST" action="#" className="flex" {...props}>
            {children}
          </form>
        </div>
      </div>
    );
  }
  