import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/playerContext'

const ControlIcon = ({ src, className = 'h-7 w-7' }) => (
  <img className={`${className} object-contain opacity-75`} src={src} alt='' />
)

const DisplayAlbum = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { playWithId } = useContext(PlayerContext)
  const album = albumsData.find((item) => item.id === Number(id))

  if (!album) {
    return (
      <div className='p-8'>
        <p className='text-xl font-bold'>Playlist not found</p>
        <button className='mt-4 rounded-full bg-white px-5 py-2 font-semibold text-black' onClick={() => navigate('/')}>
          Back to home
        </button>
      </div>
    )
  }

  return (
    <div className='-mx-3 -mt-3 min-h-full bg-[#101010] sm:-mx-6 sm:-mt-6'>
      <header
        className='flex flex-col gap-5 px-4 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-7 md:flex-row md:items-end md:gap-7'
        style={{ background: `linear-gradient(180deg, ${album.bgColor}, ${album.bgColor}cc)` }}
      >
        <img className='h-40 w-40 shrink-0 rounded object-cover shadow-2xl sm:h-48 sm:w-48 md:h-56 md:w-56' src={album.image} alt='' />
        <div className='min-w-0 pb-1'>
          <p className='text-sm font-bold sm:text-base'>{album.type}</p>
          <h1 className='my-3 text-4xl font-extrabold tracking-normal sm:my-4 sm:text-5xl lg:text-7xl'>{album.name}</h1>
          <p className='text-base text-white/70 sm:text-lg'>{album.artists}</p>
          <p className='mt-3 text-base font-semibold'>
            <span className='text-[#1ed760]'>Spotify</span>
            <span className='text-white/65'> - 50 songs, about 2 hr 45 min</span>
          </p>
          {album.about && <p className='mt-4 text-base text-white/65'>{album.about}</p>}
        </div>
      </header>

      <main className='bg-gradient-to-b from-[#232343] via-[#14141c] to-[#101010] px-4 pb-8 pt-6 sm:px-8 sm:pt-7'>
        <div className='mb-6 flex items-center justify-between sm:mb-8'>
          <div className='flex items-center gap-5 sm:gap-7'>
            <button
              className='flex h-14 w-14 items-center justify-center rounded-full bg-[#1ed760] hover:scale-105 sm:h-16 sm:w-16'
              onClick={() => playWithId(songsData[0].id)}
            >
              <img className='h-6 w-6 object-contain invert sm:h-7 sm:w-7' src={assets.play_icon} alt='' />
            </button>
            <button className='text-[#b3b3b3] hover:text-white'>
              <ControlIcon src={assets.shuffle_icon} className='h-8 w-8' />
            </button>
            <button className='flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#b3b3b3] hover:border-white'>
              <ControlIcon src={assets.plus_icon} className='h-5 w-5' />
            </button>
            <button className='text-3xl tracking-widest text-[#b3b3b3] hover:text-white'>...</button>
          </div>
          <p className='text-[#b3b3b3]'>List</p>
        </div>

        <div className='grid grid-cols-[36px_minmax(0,1fr)_56px] items-center border-b border-white/10 px-2 pb-3 text-sm text-[#b3b3b3] sm:grid-cols-[48px_minmax(280px,1fr)_minmax(180px,0.45fr)_72px] sm:px-4 sm:text-base'>
          <span>#</span>
          <span>Title</span>
          <span className='hidden sm:block'>Album</span>
          <img className='ml-auto h-5 w-5 opacity-70' src={assets.clock_icon} alt='' />
        </div>

        {songsData.slice(0, 6).map((song, index) => (
          <div
            key={song.id}
            className='grid cursor-pointer grid-cols-[36px_minmax(0,1fr)_56px] items-center rounded px-2 py-3 text-[#b3b3b3] hover:bg-white/10 sm:grid-cols-[48px_minmax(280px,1fr)_minmax(180px,0.45fr)_72px] sm:px-4'
            onClick={() => playWithId(song.id)}
          >
            <span className='text-lg'>{index + 1}</span>
            <div className='flex min-w-0 items-center gap-4'>
              <img className='h-12 w-12 rounded object-cover' src={song.image} alt='' />
              <div className='min-w-0'>
                <p className='truncate text-base text-white sm:text-lg'>{song.name}</p>
                <p className='truncate text-sm sm:text-base'>{song.desc}</p>
              </div>
            </div>
            <p className='hidden truncate text-base sm:block'>{song.album}</p>
            <p className='text-right text-sm sm:text-base'>{song.duration}</p>
          </div>
        ))}
      </main>
    </div>
  )
}

export default DisplayAlbum
