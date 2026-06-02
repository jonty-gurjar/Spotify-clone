import React, { useContext } from 'react'
import { PlayerContext } from '../context/playerContext'

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext)

  return (
    <div
      className='w-[145px] shrink-0 rounded p-2 cursor-pointer hover:bg-[#ffffff12] sm:w-[180px] sm:p-3'
      onClick={() => playWithId(id)}
    >
        <img className='aspect-square w-full rounded object-cover' src={image} alt='' />
        <p className='mt-3 mb-1 truncate font-bold'>{name}</p>
        <p className='line-clamp-2 text-sm leading-5 text-[#b3b3b3]'>{desc}</p>
    </div>
  )
}

export default SongItem
