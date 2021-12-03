export default function formatDuration(duration: number) {
  const minutes = duration / 60
  const stringMinutes = Math.floor(duration / 60) >= 1 ? Math.floor(duration / 60) + 'm' : ''
  const stringHours = Math.floor(minutes / 24) >= 1 ? Math.floor(minutes / 24) + 'h' : ''
  const stringSeconds = duration % 60 >= 1 ? (duration % 60) + 's' : ''

  return stringHours + stringMinutes + stringSeconds
}
