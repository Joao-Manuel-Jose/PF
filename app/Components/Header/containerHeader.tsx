import { ReactNode } from 'react'

export function HeaderContainer({ children }: { children: ReactNode }) {
  return (
    <>
    <header className="fixed z-30 h-22 w-full z-900 py-3 bg-gray-50   w-full border-b border-b-1 border-gray-200">
      {children}
    </header>
    <br />
    <br />
    <br/>
    </>
  )
}