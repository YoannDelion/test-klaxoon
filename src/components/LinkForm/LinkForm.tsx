import { useState } from 'react'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'

export default function LinkForm() {
  const [link, setLink] = useState('')

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLink(e.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(link)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Ajouter un bookmark</p>
      <TextInput value={link} setValue={handleChange} />
      <Button>Enregistrer</Button>
    </form>
  )
}
