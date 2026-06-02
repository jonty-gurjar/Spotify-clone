import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/playerContext'

const IconButton = ({ children, className = '', onClick }) => (
  <button
    className={`flex items-center justify-center text-white/75 transition hover:text-white ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

const AssetIcon = ({ src, className = 'h-6 w-6' }) => (
  <img className={`${className} object-contain opacity-80`} src={src} alt='' />
)

const formatTime = ({ minute, second }) => `${minute}:${String(second).padStart(2, '0')}`

const POP = ({ onClose }) => {
  const {
    seekBar,
    seekBg,
    volumeBar,
    volumeBg,
    playStatus,
    progress,
    track,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
    changeVolume,
  } = useContext(PlayerContext)

  return (
    <div className='fixed inset-0 z-50 flex flex-col bg-black text-white'>
      <div
        className='flex min-h-0 flex-1 flex-col rounded-t-xl px-8 py-7'
        style={{ background: `linear-gradient(180deg, ${track.bgColor || '#7a240f'} 0%, #2b0703 72%, #000 100%)` }}
      >
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-black'>{track.album || 'Now Playing'}</h1>
          <div className='flex items-center gap-6'>
            <IconButton>
              <span className='text-3xl leading-none'>...</span>
            </IconButton>
            <IconButton onClick={onClose} className='h-10 w-10 rounded-full bg-black/25 text-2xl'>
              x
            </IconButton>
          </div>
        </div>

        <div className='grid min-h-0 flex-1 grid-cols-[minmax(260px,1fr)_minmax(420px,0.9fr)_minmax(260px,1fr)] items-center gap-8'>
          <section className='self-end rounded-t-lg bg-black/25 p-8'>
            <h2 className='text-4xl font-black'>About the artist</h2>
            <p className='mt-4 max-w-md text-base leading-7 text-white/70'>{track.desc}</p>
          </section>

          <section className='flex flex-col items-center justify-center'>
            <img className='aspect-square w-full max-w-[560px] rounded-xl object-cover shadow-2xl' src={track.image} alt='' />
          </section>

          <section className='self-end rounded-t-lg bg-black/25 p-8'>
            <div className='flex items-center justify-between'>
              <h2 className='text-4xl font-black'>Credits</h2>
              <button className='text-base font-bold text-white/60 hover:text-white'>Show all</button>
            </div>
            <p className='mt-4 text-base leading-7 text-white/70'>{track.desc}</p>
          </section>
        </div>
      </div>

      <div className='grid min-h-[112px] grid-cols-[minmax(300px,1fr)_minmax(500px,0.9fr)_minmax(360px,1fr)] items-center gap-8 bg-black px-10 py-3'>
        <div className='flex min-w-0 items-center gap-4'>
          <img className='h-20 w-20 rounded object-cover' src={track.image} alt='' />
          <div className='min-w-0'>
            <p className='truncate text-xl font-bold'>{track.name}</p>
            <p className='truncate text-base text-[#b3b3b3]'>{track.desc}</p>
          </div>
          <button className='ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#1ed760]'>
            <img className='h-3.5 w-3.5 object-contain invert' src={assets.plus_icon} alt='' />
          </button>
        </div>

        <div className='flex min-w-0 flex-col items-center gap-2'>
          <div className='flex items-center gap-7'>
            <IconButton>
              <AssetIcon src={assets.shuffle_icon} className='h-7 w-7' />
            </IconButton>
            <IconButton onClick={previous}>
              <AssetIcon src={assets.prev_icon} className='h-8 w-8' />
            </IconButton>
            <button
              className='flex h-16 w-16 items-center justify-center rounded-full bg-white text-black transition hover:scale-105'
              onClick={playStatus ? pause : play}
            >
              <img className='h-9 w-9 object-contain invert' src={playStatus ? assets.pause_icon : assets.play_icon} alt='' />
            </button>
            <IconButton onClick={next}>
              <AssetIcon src={assets.next_icon} className='h-8 w-8' />
            </IconButton>
            <IconButton>
              <AssetIcon src={assets.loop_icon} className='h-7 w-7' />
            </IconButton>
          </div>

          <div className='flex w-full items-center gap-3 text-base text-[#d6d6d6]'>
            <span className='w-12 text-right'>{formatTime(time.currentTime)}</span>
            <div ref={seekBg} onClick={seekSong} className='flex h-3 flex-1 cursor-pointer items-center'>
              <div className='h-1 w-full overflow-hidden rounded-full bg-[#4d4d4d]'>
                <div ref={seekBar} className='h-full rounded-full bg-[#1ed760]' style={{ width: `${progress}%` }} />
              </div>
            </div>
            <span className='w-12'>{formatTime(time.totalTime)}</span>
          </div>
        </div>

        <div className='flex items-center justify-end gap-5 text-[#b3b3b3]'>
          <IconButton>
            <AssetIcon src={assets.plays_icon} className='h-6 w-6' />
          </IconButton>
          <IconButton>
            <AssetIcon src={assets.mic_icon} className='h-6 w-6' />
          </IconButton>
          <IconButton>
            <AssetIcon src={assets.queue_icon} className='h-6 w-6' />
          </IconButton>
          <IconButton>
            <AssetIcon src={assets.mini_player_icon} className='h-6 w-6' />
          </IconButton>
          <IconButton>
            <AssetIcon src={assets.speaker_icon} className='h-6 w-6' />
          </IconButton>
          <IconButton>
            <AssetIcon src={assets.volume_icon} className='h-6 w-6' />
          </IconButton>
          <div ref={volumeBg} onClick={changeVolume} className='flex h-3 w-32 cursor-pointer items-center'>
            <div className='h-1 w-full overflow-hidden rounded-full bg-[#4d4d4d]'>
              <div ref={volumeBar} className='h-full w-full rounded-full bg-[#1ed760]' />
            </div>
          </div>
          <IconButton>
            <AssetIcon src={assets.plus_icon} className='h-6 w-6' />
          </IconButton>
          <IconButton onClick={onClose}>
            <AssetIcon src={assets.zoom_icon} className='h-6 w-6' />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default POP
