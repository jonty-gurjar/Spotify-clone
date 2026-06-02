import React from 'react'
import { assets, libraryData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const AssetIcon = ({ src, className = 'w-5 h-5' }) => (
    <img className={`${className} object-contain opacity-75 hover:opacity-100`} src={src} alt='' />
)

const LibraryItem = ({ item }) => (
    <div className='flex items-center gap-3 rounded p-2 hover:bg-[#1f1f1f] cursor-pointer'>
        {item.type === 'liked' ? (
            <div className='w-14 h-14 rounded-md bg-gradient-to-br from-[#4f1df7] via-[#7b6df0] to-[#bff0d7] flex items-center justify-center shrink-0'>
                <AssetIcon src={item.image} className='w-7 h-7' />
            </div>
        ) : (
            <img
                className={`${item.square ? 'rounded-md' : 'rounded-full'} w-14 h-14 object-cover shrink-0`}
                src={item.image}
                alt=''
            />
        )}

        <div className='min-w-0'>
            <p className={`${item.active ? 'text-[#1ed760]' : 'text-white'} text-base font-semibold truncate`}>
                {item.title}
            </p>
            <div className='flex items-center gap-1 text-[#b3b3b3] text-sm font-semibold truncate'>
                {item.pinned && <span className='text-[#1ed760] text-sm leading-none'>pin</span>}
                <span className='truncate'>{item.subtitle}</span>
            </div>
        </div>
    </div>
)

const Sider = () => {

    const navigate = useNavigate();
    return (
        <aside className='w-[25%] h-full p-2 text-white hidden lg:flex'>
            <div className='bg-[#121212] h-full w-full rounded-lg flex flex-col px-5 py-5 overflow-hidden'>
                <div onClick={()=>navigate('/')} className='flex items-center justify-between cursor-pointer'>
                    <h2 className='text-2xl font-bold'>Your Library</h2>
                    <div className='flex items-center gap-4 text-[#b3b3b3]'>
                        <button className='w-10 h-10 rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-[#2a2a2a]'>
                            <AssetIcon src={assets.plus_icon} className='w-5 h-5' />
                        </button>
                        <button>
                            <AssetIcon src={assets.arrow_icon} className='w-5 h-5' />
                        </button>
                    </div>
                </div>

                <div className='flex items-center gap-3 mt-7'>
                    {['Playlists', 'Artists', 'Albums'].map((filter) => (
                        <button
                            key={filter}
                            className='px-4 py-2 rounded-full bg-[#2a2a2a] text-base font-semibold hover:bg-[#333333]'
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className='flex items-center justify-between mt-7 text-[#b3b3b3]'>
                    <button className='w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#1f1f1f]'>
                        <AssetIcon src={assets.search_icon} className='w-6 h-6' />
                    </button>
                    <button className='flex items-center gap-2 text-base font-semibold hover:text-white'>
                        <span>Recents</span>
                        <AssetIcon src={assets.queue_icon} className='w-6 h-6' />
                    </button>
                </div>

                <div className='mt-5 -mx-2 pr-1 overflow-y-auto'>
                    {libraryData.map((item) => (
                        <LibraryItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Sider
