import { PhotoCardProps } from '../../types/cards'
import Button from '../Button/Button'
import Card from '../Card/Card'

export default function PhotoCard({
  removeLinkData,
  url,
  title,
  authorName,
  thumbnailUrl,
  width,
  height,
}: PhotoCardProps) {
  return (
    <Card>
      <img
        src={thumbnailUrl}
        alt={title}
        style={{ width: '100%', height: 150, objectFit: 'contain' }}
      />
      <p>{title}</p>
      <p>Par {authorName}</p>
      <i>Pas de date pour les liens flickr</i>
      <p>Dimensions : {width + 'x' + height}</p>
      <p>Lien vers l'image : {url}</p>
      <Button>
        <a href={url} target='_blank' rel='noreferrer'>
          Voir l'image
        </a>
      </Button>
      <Button handleClick={() => removeLinkData(url)}>Supprimer</Button>
    </Card>
  )
}
