interface Props {
  children: string
  handleClick?: () => void
  type?: 'submit' // make a union type
}

export default function Button({ children, handleClick, type = 'submit' }: Props) {
  return (
    <button onClick={handleClick} type={type}>
      {children}
    </button>
  )
}
