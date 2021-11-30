import { useState } from 'react'
import checkLinkFormat from '../../utils/checkLinkFormat'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'

export default function LinkForm() {
  const [link, setLink] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLink(e.currentTarget.value.trim())
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    if (checkLinkFormat(link)) {
      setLoading(true)
      try {
        const res = await fetch(`http://noembed.com/embed?url=${link}`)
        const data = await res.json()
        console.log(data)
      } catch (e) {
        setError('Une erreur est survenur, merci de réessayer')
      } finally {
        setLoading(false)
      }
    } else {
      setError("Format du lien invalide, merci de vérifier le format de l'url")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Ajouter un bookmark</p>
      <TextInput value={link} setValue={handleChange} />
      <Button>Enregistrer</Button>
      <p>Formats possibles de l'url :</p>
      <ul>
        <li>https://vimeo.com/565486457</li>
        <li>https://www.flickr.com/photos/feuilllu/45771361701</li>
      </ul>
      {error && <p>{error}</p>}
    </form>
  )
}
