import { ReactNode } from 'react'

interface Props {
  children: string | ReactNode
  handleClick?: () => void
  type?: 'submit' | 'button' // make a union type
}

export default function Button({ children, handleClick, type = 'button' }: Props) {
  return (
    <button onClick={handleClick} type={type}>
      {children}
    </button>
  )
}
