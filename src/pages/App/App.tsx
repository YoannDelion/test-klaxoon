import { useState } from 'react'
import Button from '../../components/Button/Button'
import LinkForm from '../../components/LinkForm/LinkForm'
import Card from '../../components/Card/Card'
import './App.css'
import VideoCard from '../../components/VideoCard/VideoCard'
import PhotoCard from '../../components/PhotoCard/PhotoCard'
import { Link } from '../../types/link'

const data = [
  {
    author_name: 'Pierre Metivier',
    provider_url: 'https://www.flickr.com/',
    type: 'photo',
    height: 685,
    thumbnail_width: 150,
    url: 'https://www.flickr.com/photos/feuilllu/45771361701',
    thumbnail_height: 150,
    flickr_type: 'photo',
    license_id: '2',
    media_url: 'https://live.staticflickr.com/4817/45771361701_2678123510_b.jpg',
    web_page_short_url: 'https://flic.kr/p/2cJEcbD',
    title: '2018 Visite de Klaxoon',
    author_url: 'https://www.flickr.com/photos/feuilllu/',
    thumbnail_url: 'https://live.staticflickr.com/4817/45771361701_2678123510_q.jpg',
    html: '<a data-flickr-embed="true" href="https://www.flickr.com/photos/feuilllu/45771361701/" title="2018 Visite de Klaxoon by Pierre Metivier, on Flickr"><img alt="2018 Visite de Klaxoon" height="685" src="https://noembed.com/i/https://live.staticflickr.com/4817/45771361701_2678123510_b.jpg" width="1024"></a><script async src="https://embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>',
    cache_age: 3600,
    provider_name: 'Flickr',
    width: 1024,
    license_url: 'https://creativecommons.org/licenses/by-nc/2.0/',
    version: '1.0',
    web_page: 'https://www.flickr.com/photos/feuilllu/45771361701/',
    license: 'Attribution-NonCommercial License',
  },
  {
    duration: 1070,
    provider_name: 'Vimeo',
    width: 426,
    is_plus: '0',
    title: 'Sylvain Lhommée @ Nation Entreprenante - Episode #5',
    author_url: 'https://vimeo.com/barterlink',
    thumbnail_url:
      'https://i.vimeocdn.com/video/1169280957-6513b97be812eac51f6ba090b2f34ab5a63bfc220076c0118950fcf4c227fdce-d_295x166',
    html: '<iframe src="https://player.vimeo.com/video/565486457?h=e0568b6bc1&amp;app_id=122963" width="426" height="240" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Sylvain Lhomm&amp;eacute;e @ Nation Entreprenante - Episode #5"></iframe>',
    description:
      "Dans Nation entreprenante, on ne tourne pas autour du pot ! On vous aide à explorer de nouveaux usages pour une économie plus circulaire et solidaire.\n\nIl est possible de se développer sans dépenser, de mutualiser pour évoluer durablement. Et si nous en faisions une valeur ajoutée ?\n\nSylvain Lhommée et Marc Evenisse évoquent ces pratiques ancestrales qui font du bien à notre futur avec Nicolas Celier, notre expert du jour, et Raphaëlle Duchemin, dans ce nouveau numéro de Nation entreprenante, enregistré au Klaxoon Store (Paris 2ème).\n\nDans ce numéro également, Les Poteries d'Albi et Circul'Egg.\n\nNotre expert fil rouge :  Nicolas Celier, Co-fondateur de Ring Capital. Sylvain Lhommée, CEO Fondateur de BarterLink et Marc Evenisse, Fondateur de Furion Motorcycles et VP de Le Mans Tech partagent leur vision sur le sujet.\n\nInvestir ? Fédérer ? Comment faire de chaque crise une chance ?\n\nEt si on relançait l'économie en échangeant une compétence, un savoir-faire, un matériel ou des m2 vides contre un service ou un bien dont on a besoin ? Relocaliser nécessite parfois de mettre en commun des moyens. Humain, financier ou immobilier, nous avons tous un élément précieux à partager.\n\nSylvain Lhommée nous explique comment on peut, grâce au Bartering, préserver sa trésorerie, tout en développant son réseau. Marc Evenisse donne d'autres exemples concrets qui abondent dans le sens du partage et de l'échange.",
    video_id: 565486457,
    version: '1.0',
    uri: '/videos/565486457',
    upload_date: '2021-06-21 02:42:24',
    thumbnail_width: 295,
    thumbnail_url_with_play_button:
      'https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1169280957-6513b97be812eac51f6ba090b2f34ab5a63bfc220076c0118950fcf4c227fdce-d_295x166&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png',
    author_name: 'BARTERLINK',
    height: 240,
    provider_url: 'https://vimeo.com/',
    type: 'video',
    account_type: 'pro',
    url: 'https://vimeo.com/565486457',
    thumbnail_height: 166,
  },
]

function App() {
  const [linkList, setLinkList] = useState<Link[]>(data)

  const addLinkData = (link: Link) => {
    setLinkList((linkList) => [...linkList, link])
  }

  return (
    <div className='App'>
      <h1>Mes bookmarks</h1>
      <LinkForm addLinkData={addLinkData} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {linkList.map((link, index) => {
          const {
            type,
            thumbnail_url,
            url,
            title,
            author_name,
            width,
            height,
            upload_date,
            duration,
          } = link

          switch (type) {
            case 'photo':
              return (
                <PhotoCard
                  thumbnailUrl={thumbnail_url}
                  url={url}
                  title={title}
                  authorName={author_name}
                  width={width}
                  height={height}
                />
              )
            case 'video':
              return (
                <VideoCard
                  thumbnailUrl={thumbnail_url}
                  url={url}
                  title={title}
                  authorName={author_name}
                  uploadDate={upload_date}
                  duration={duration}
                />
              )
            default:
              return <p>Mauvais format</p>
          }
        })}
      </div>
    </div>
  )
}

export default App
