import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Sider from './components/Sider'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/playerContext'
import { assets } from './assets/assets'

const MobileBottomNav = () => (
  <nav className='fixed bottom-0 left-0 right-0 z-30 grid h-20 grid-cols-5 items-center bg-black/95 px-4 pb-2 text-[11px] text-[#b3b3b3] sm:hidden'>
    <button className='flex flex-col items-center gap-1 text-white'>
      <img className='h-6 w-6 object-contain' src={assets.home_icon} alt='' />
      <span>Home</span>
    </button>
    <button className='flex flex-col items-center gap-1'>
      <img className='h-6 w-6 object-contain opacity-80' src={assets.search_icon} alt='' />
      <span>Search</span>
    </button>
    <button className='flex flex-col items-center gap-1'>
      <img className='h-6 w-6 object-contain opacity-80' src={assets.stack_icon} alt='' />
      <span>Your Library</span>
    </button>
    <button className='flex flex-col items-center gap-1'>
      <img className='h-6 w-6 object-contain' src={assets.spotify_logo} alt='' />
      <span>Premium</span>
    </button>
    <button className='flex flex-col items-center gap-1'>
      <img className='h-6 w-6 object-contain opacity-80' src={assets.plus_icon} alt='' />
      <span>Create</span>
    </button>
  </nav>
)

const App = () => {

  const {audioRef,track} = useContext(PlayerContext);

  return (
    <div className='flex h-dvh min-h-screen flex-col bg-black'>
      <Navbar />
      <div className='flex min-h-0 flex-1'>
        <Sider />
        <Display />
      </div>
      <Player />
      <MobileBottomNav />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
