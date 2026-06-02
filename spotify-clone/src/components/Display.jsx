import React, { useEffect, useRef }from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {

  const dislayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? Number(location.pathname.split('/').pop()) : null;
  const bgColor = albumsData.find((album) => album.id === albumId)?.bgColor || '#121212';
  
  useEffect(()=>{
    if (isAlbum) {
      dislayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
    }
    else{
      dislayRef.current.style.background = `#121212`

    }
  })
    
  return (
    <div ref={dislayRef} className='m-0 min-w-0 flex-1 overflow-auto bg-[#121212] px-0 pt-0 text-white sm:m-2 sm:rounded sm:px-6 sm:pt-6 lg:w-[75%] lg:flex-none lg:ml-0'>
        <Routes>
            <Route path='/' element={<DisplayHome/>} />
            <Route path='/album/:id' element={<DisplayAlbum/>} />

        </Routes>
    </div>
  ) 
}

export default Display
