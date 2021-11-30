export default function checkLinkFormat(link: string) {
  const vimeoRegEx = new RegExp('^https://vimeo.com/[0-9]+/?$')
  const flickrRegEx = new RegExp('^https://www.flickr.com/photos/feuilllu/[0-9]+/?$')
  return vimeoRegEx.test(link) || flickrRegEx.test(link)
}
