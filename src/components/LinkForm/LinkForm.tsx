import { useState } from 'react'
import { Link } from '../../types/link'
import checkLinkFormat from '../../utils/checkLinkFormat'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'

interface Props {
  addLinkData: (link: Link) => void
}

export default function LinkForm({ addLinkData }: Props) {
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
        if (data.error) {
          setError('Une erreur est survenur, merci de vérifier le lien et de réessayer')
        } else {
          addLinkData(data)
        }
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
      <Button type='submit'>Enregistrer</Button>
      <p>Formats possibles de l'url :</p>
      <ul>
        <li>https://vimeo.com/565486457</li>
        <li>https://www.flickr.com/photos/feuilllu/45771361701</li>
      </ul>
      {error && <p>{error}</p>}
    </form>
  )
}
