import { useState } from 'react'
import checkLinkFormat from '../../utils/checkLinkFormat'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'

export default function LinkForm() {
  const [link, setLink] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLink(e.currentTarget.value.trim())
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (checkLinkFormat(link)) {
      setError(false)
      // Send link to API
    } else {
      setError(true)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Ajouter un bookmark</p>
      <TextInput value={link} setValue={handleChange} />
      <Button>Enregistrer</Button>
      {error && (
        <div>
          <p>Format du lien invalide, il doit avoir une des deux formes suivantes :</p>
          <ul>
            <li>https://vimeo.com/565486457</li>
            <li>https://www.flickr.com/photos/feuilllu/45771361701</li>
          </ul>
        </div>
      )}
    </form>
  )
}
