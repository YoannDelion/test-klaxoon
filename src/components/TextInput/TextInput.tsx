interface Props {
  value: string
  type?: 'text' // Could create a union type listing all html input types
  setValue: any
}

export default function TextInput({ value, type = 'text', setValue }: Props) {
  return <input type={type} value={value} onChange={setValue} />
}
