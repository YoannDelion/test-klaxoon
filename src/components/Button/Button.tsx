interface Props {
  children: string
  handleClick: () => void
}

export default function Button({ children, handleClick }: Props) {
  return <button onClick={handleClick}>{children}</button>
}
