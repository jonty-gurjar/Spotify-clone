import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/playerContext'
import POP from './POP'

const IconButton = ({ children, className = '', onClick }) => (
  <button
    className={`text-[#b3b3b3] hover:text-white transition flex items-center justify-center ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

const AssetIcon = ({ src, className = 'w-5 h-5' }) => (
  <img className={`${className} object-contain opacity-75 hover:opacity-100`} src={src} alt='' />
)

const Player = () => {
  const [showPop, setShowPop] = useState(false)

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
    <>
    <div className='hidden min-h-20 bg-black sm:flex items-center justify-between text-white px-3 py-2 sm:px-5'>
      <div
        className='hidden lg:flex items-center gap-3 w-[30%] min-w-0 cursor-pointer rounded px-1 py-1 hover:bg-white/5'
        onClick={() => setShowPop(true)}
      >
        <img className='w-16 h-16 object-cover rounded' src={track.image} alt='' />
        <div className='min-w-0'>
          <p className='text-base font-semibold truncate'>{track.name}</p>
          <p className='text-sm text-[#b3b3b3] truncate'>{track.desc}</p>
        </div>
        <button className='ml-3 w-4 h-4 rounded-full bg-[#1ed760] text-black flex items-center justify-center shrink-0'>
          <span className='text-[10px] font-black leading-none'>✓</span>
        </button>
      </div>

      <div className='flex min-w-0 flex-1 flex-col items-center gap-2 md:max-w-[760px]'>
        <div className='flex items-center gap-4 sm:gap-6'>
          <IconButton>
            <AssetIcon src={assets.shuffle_icon} />
          </IconButton>
          <IconButton className='cursor-pointer' onClick={previous}>
            <AssetIcon src={assets.prev_icon} />
          </IconButton>
          <button
            className='w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition sm:h-12 sm:w-12'
            onClick={playStatus ? pause : play}>
            <img className='w-5 h-5 object-contain invert sm:h-6 sm:w-6 cursor-pointer' src={playStatus ? assets.pause_icon : assets.play_icon} alt='' />
          </button>
          <IconButton className='cursor-pointer' onClick={next}>
            <AssetIcon src={assets.next_icon} />
          </IconButton>
          <IconButton>
            <AssetIcon src={assets.loop_icon} />
          </IconButton>
        </div>

        <div className='flex items-center gap-2 w-full text-xs text-[#d6d6d6] sm:gap-3 sm:text-sm'>
          <span className='w-10 text-right'>{time.currentTime.minute}:{time.currentTime.second}</span>
          <div ref={seekBg} onClick={seekSong} className='group h-3 flex items-center flex-1 cursor-pointer'>
            <div className='h-1 w-full bg-[#4d4d4d] rounded-full overflow-hidden'>
              <div ref={seekBar} className='h-full bg-[#1ed760] rounded-full' style={{ width: `${progress}%` }} />
            </div>
          </div>
          <span className='w-10'>{time.totalTime.minute}:{time.totalTime.second}</span>
        </div>
      </div>

      <div className='hidden lg:flex items-center justify-end gap-4 w-[30%] text-[#b3b3b3]'>
        <IconButton>
          <AssetIcon src={assets.plays_icon} />
        </IconButton>
        <IconButton>
          <AssetIcon src={assets.mic_icon} />
        </IconButton>
        <IconButton>
          <AssetIcon src={assets.queue_icon} />
        </IconButton>
        <IconButton>
          <AssetIcon src={assets.speaker_icon} />
        </IconButton>
        <IconButton>
          <AssetIcon src={assets.volume_icon} />
        </IconButton>
        <div ref={volumeBg} onClick={changeVolume} className='h-3 w-32 cursor-pointer flex items-center'>
          <div className='h-1 w-full overflow-hidden rounded-full bg-[#4d4d4d]'>
            <div ref={volumeBar} className='h-full w-full rounded-full bg-[#1ed760]' />
          </div>
        </div>
        <IconButton onClick={() => setShowPop(true)}>
          <AssetIcon src={assets.mini_player_icon} />
        </IconButton>
        <IconButton onClick={() => setShowPop(true)}>
          <AssetIcon src={assets.zoom_icon} />
        </IconButton>
      </div>
    </div>
    {showPop && <POP onClose={() => setShowPop(false)} />}
    </>
  )
}

export default Player
