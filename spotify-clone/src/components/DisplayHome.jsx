import React from 'react'
import { useNavigate } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import SongItem from './SongItem'

const madeFor = [
  {
    id: albumsData[0].id,
    image: albumsData[0].image,
    title: albumsData[0].name,
    desc: 'Your shortcut to hidden gems, deep cuts and new discoveries',
  },
  {
    id: albumsData[1].id,
    image: albumsData[1].image,
    title: albumsData[1].name,
    desc: 'Pritam, Vishal-Shekhar, Arijit Singh and more',
  },
  {
    id: albumsData[2].id,
    image: albumsData[2].image,
    title: albumsData[2].name,
    desc: 'Silk Route, Lucky Ali, Abhay Jodhpurkar and more',
  },
  {
    id: albumsData[3].id,
    image: albumsData[3].image,
    title: albumsData[3].name,
    desc: 'Justin Bieber, Shawn Mendes, The Kid LAROI and more',
  },
  {
    id: albumsData[4].id,
    image: albumsData[4].image,
    title: albumsData[4].name,
    desc: 'Karan Sehmbi, Tulsi Kumar, Amrita Singh and more',
  },
  {
    id: albumsData[5].id,
    image: albumsData[5].image,
    title: albumsData[5].name,
    desc: 'Tony Kakkar, Neha Kakkar and more',
  },
]

const popularRadio = [
  {
    image: songsData[0].image,
    title: 'Arijit Singh Radio',
    desc: 'With Pritam, Atif Aslam and Mohit Chauhan',
  },
  {
    image: songsData[1].image,
    title: 'KK Radio',
    desc: 'With Shaan, Pritam and Sonu Nigam',
  },
  {
    image: songsData[2].image,
    title: 'A.R. Rahman Radio',
    desc: 'With Shankar Mahadevan, Hariharan and more',
  },
  {
    image: songsData[3].image,
    title: 'Shreya Ghoshal Radio',
    desc: 'With Sunidhi Chauhan, Arijit Singh and more',
  },
  {
    image: songsData[4].image,
    title: 'Kishore Kumar Radio',
    desc: 'With R.D. Burman, Mukesh and more',
  },
  {
    image: songsData[5].image,
    title: 'Sonu Nigam Radio',
    desc: 'With Shaan, Alka Yagnik and more',
  },
]

const mobileStations = [
  {
    image: songsData[0].image,
    title: 'Arijit Singh',
    desc: 'Arijit Singh, Pritam, Alka Yagnik, A.R. Rahman, Jeet...',
    bg: 'bg-[#f8d878]',
  },
  {
    image: albumsData[3].image,
    title: 'Justin Bieber',
    desc: 'Justin Bieber, Ed Sheeran, SZA, DJ Snake, The Kid LA...',
    bg: 'bg-[#86dfd0]',
  },
  {
    image: songsData[5].image,
    title: 'The Weeknd',
    desc: 'The Weeknd, Ariana Grande, Daft Punk and more',
    bg: 'bg-[#f292c8]',
  },
]

const mobileMixes = [
  {
    image: songsData[2].image,
    title: 'Chill Mix',
    desc: 'NBSPLV, One Direction, Alok and more',
    color: 'bg-[#eac5ff]',
  },
  {
    image: songsData[4].image,
    title: 'King Mix',
    desc: 'Paradox, Aditya A and Vilen',
    color: 'bg-[#b6c3ff]',
  },
  {
    image: albumsData[2].image,
    title: 'Hip Hop Mix',
    desc: 'KR$NA, Raftaar, Divine, D-Block',
    color: 'bg-[#f4f13b]',
  },
]

const mobileRecents = [
  {
    image: albumsData[1].image,
    title: 'Hot Hits Hindi',
    desc: 'Playlist - Spotify',
  },
  {
    image: songsData[2].image,
    title: 'The Weeknd',
    desc: 'Artist',
    round: true,
  },
]

const MobileStationCard = ({ item }) => (
  <article className='w-40 shrink-0'>
    <div className={`${item.bg} aspect-square overflow-hidden rounded-md p-3 text-black`}>
      <div className='mb-1 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.16em]'>
        <img className='h-4 w-4' src={assets.spotify_logo} alt='' />
        <span>Radio</span>
      </div>
      <div className='flex h-[58%] items-center justify-center gap-2'>
        <img className='h-12 w-12 rounded-full object-cover' src={item.image} alt='' />
        <img className='h-20 w-20 rounded-full object-cover' src={item.image} alt='' />
        <img className='h-12 w-12 rounded-full object-cover' src={item.image} alt='' />
      </div>
      <p className='mt-2 truncate text-2xl font-black leading-none'>{item.title}</p>
    </div>
    <p className='mt-3 line-clamp-2 text-sm leading-5 text-[#b3b3b3]'>{item.desc}</p>
  </article>
)

const MobileMixCard = ({ item }) => (
  <article className='w-40 shrink-0'>
    <div className='relative aspect-square overflow-hidden rounded bg-[#202020]'>
      <img className='h-full w-full object-cover' src={item.image} alt='' />
      <div className={`${item.color} absolute bottom-0 left-0 right-0 flex h-8 items-center gap-2 px-2 text-black`}>
        <span className='h-6 w-1 bg-white' />
        <span className='truncate text-lg font-black'>{item.title}</span>
      </div>
    </div>
    <p className='mt-3 line-clamp-2 text-sm leading-5 text-[#b3b3b3]'>{item.desc}</p>
  </article>
)

const MobileRecentCard = ({ item }) => (
  <article className='w-32 shrink-0'>
    <img className={`${item.round ? 'rounded-full' : 'rounded-md'} aspect-square w-full object-cover`} src={item.image} alt='' />
    <p className='mt-3 truncate text-sm font-bold text-[#d7d7d7]'>{item.title}</p>
    <p className='mt-1 truncate text-xs text-[#7f7f7f]'>{item.desc}</p>
  </article>
)

const MobileShelf = ({ title, children, showAll = false }) => (
  <section className='mt-8'>
    <div className='mb-4 flex items-center justify-between'>
      <h2 className='text-[26px] font-black leading-none'>{title}</h2>
      {showAll && <button className='text-sm font-bold text-[#b3b3b3]'>Show all</button>}
    </div>
    <div className='hide-scrollbar flex gap-7 overflow-x-auto pb-1'>{children}</div>
  </section>
)

const MobileHome = () => (
  <div className='min-h-full bg-[#121212] px-5 pb-28 pt-7 text-white'>
    <div className='sticky top-0 z-20 -mx-5 flex items-center gap-3 bg-[#121212]/95 px-5 pb-4 pt-1'>
      <img className='h-10 w-10 rounded-full object-cover' src={songsData[2].image} alt='' />
      {['All', 'Music', 'Podcasts'].map((tab, index) => (
        <button
          key={tab}
          className={`${index === 0 ? 'bg-[#1ed760] text-black' : 'bg-[#2b2b2b] text-white'} h-11 rounded-full px-5 text-base font-semibold`}
        >
          {tab}
        </button>
      ))}
    </div>

    <MobileShelf title='Recommended Stations'>
      {mobileStations.map((item) => (
        <MobileStationCard key={item.title} item={item} />
      ))}
    </MobileShelf>

    <MobileShelf title='Your top mixes'>
      {mobileMixes.map((item) => (
        <MobileMixCard key={item.title} item={item} />
      ))}
    </MobileShelf>

    <MobileShelf title='Recents' showAll>
      {mobileRecents.map((item) => (
        <MobileRecentCard key={item.title} item={item} />
      ))}
    </MobileShelf>
  </div>
)

const MediaCard = ({ item, onClick }) => (
  <article
    className='group w-[145px] shrink-0 cursor-pointer sm:w-[180px] lg:w-[220px] xl:w-[235px]'
    onClick={onClick}
  >
    <div className='relative overflow-hidden rounded-md aspect-square bg-[#202020]'>
      <img className='w-full h-full object-cover' src={item.image} alt='' />
      <button
        className='absolute bottom-3 right-3 hidden h-12 w-12 items-center justify-center rounded-full bg-[#1ed760] shadow-xl group-hover:flex'
        onClick={(event) => event.stopPropagation()}
      >
        <img className='h-5 w-5 object-contain invert' src={assets.play_icon} alt='' />
      </button>
    </div>
    <p className='mt-3 truncate text-base font-semibold sm:text-lg'>{item.title}</p>
    <p className='mt-1 line-clamp-2 text-sm leading-5 text-[#b3b3b3] sm:text-base sm:leading-6'>{item.desc}</p>
  </article>
)

const Shelf = ({ title, eyebrow, items, onItemClick }) => (
  <section className='mt-5'>
    <div className='mb-4 flex items-end justify-between gap-4 sm:mb-6'>
      <div>
        {eyebrow && <p className='text-sm font-semibold text-[#b3b3b3] sm:text-base'>{eyebrow}</p>}
        <h2 className='text-2xl font-bold sm:text-4xl'>{title}</h2>
      </div>
      <button className='shrink-0 text-sm font-bold text-[#b3b3b3] hover:text-white hover:underline sm:text-lg'>Show all</button>
    </div>
    <div className='hide-scrollbar flex gap-4 overflow-x-auto pb-3 sm:gap-7'>
      {items.map((item) => (
        <MediaCard
          key={item.title}
          item={item}
          onClick={onItemClick ? () => onItemClick(item) : undefined}
        />
      ))}
    </div>
  </section>
)

const DisplayHome = () => {
  const navigate = useNavigate()

  return (
    <>
    <div className='sm:hidden'>
      <MobileHome />
    </div>

    <div className='hidden min-h-full rounded-t bg-gradient-to-b from-[#64271d] via-[#271613] to-[#121212] px-4 py-5 sm:-mx-6 sm:-mt-6 sm:block sm:px-8 sm:py-7'>
      <div className='flex items-center gap-2 sm:gap-4'>
        {['All', 'Music', 'Podcasts'].map((tab, index) => (
          <button
            key={tab}
            className={`${index === 0 ? 'bg-white text-black' : 'bg-white/10 text-white'} rounded-full px-4 py-1.5 text-sm font-semibold sm:px-5 sm:py-2 sm:text-lg`}
          >
            {tab}
          </button>
        ))}
      </div>

      <Shelf
        eyebrow='Made For'
        title='Jonty Dhabhai'
        items={madeFor}
        onItemClick={(album) => navigate(`/album/${album.id}`)}
      />
      <Shelf title='Popular radio' items={popularRadio} />

      <section className='mt-9'>
        <div className='mb-4 flex items-end justify-between gap-4 sm:mb-6'>
          <h2 className='text-2xl font-bold sm:text-4xl'>Popular songs</h2>
          <button className='shrink-0 text-sm font-bold text-[#b3b3b3] hover:text-white hover:underline sm:text-lg'>Show all</button>
        </div>
        <div className='hide-scrollbar flex gap-4 overflow-x-auto pb-3'>
          {songsData.map((item) => (
            <SongItem key={item.id} name={item.name} desc={item.desc} id={item.id} image={item.image} />
          ))}
        </div>
      </section>
    </div>
    </>
  )
}

export default DisplayHome
