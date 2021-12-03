export interface MediaCardProps {
  thumbnailUrl?: string
  url: string
  title: string
  authorName: string
}

export interface VideoCardProps extends MediaCardProps {
  uploadDate: string
  duration: number
}
export interface PhotoCardProps extends MediaCardProps {
  thumbnailUrl: string
  // uploadDate: string ------ Non retournée par l'API
  width: number
  height: number
}
