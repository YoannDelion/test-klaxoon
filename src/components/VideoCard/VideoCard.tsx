import { VideoCardProps } from '../../types/cards'
import formatDuration from '../../utils/formatDuration'
import Button from '../Button/Button'
import Card from '../Card/Card'

export default function VideoCard({
  thumbnailUrl,
  url,
  title,
  authorName,
  uploadDate,
  duration,
}: VideoCardProps) {
  return (
    <Card>
      {thumbnailUrl && <img src={thumbnailUrl} alt={title} />}
      <p>{title}</p>
      <p>Par {authorName}</p>
      <p>Publiée le {new Date(uploadDate).toLocaleDateString()}</p>
      <p>Durée : {formatDuration(duration)}</p>
      <p>Lien vers la vidéo : {url}</p>
      <Button>
        <a href={url} target='_blank' rel='noreferrer'>
          Voir la vidéo
        </a>
      </Button>
    </Card>
  )
}
