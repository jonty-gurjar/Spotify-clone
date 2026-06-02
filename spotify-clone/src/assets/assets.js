import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Discover Weekly",
        image: img8,
        desc:"Your shortcut to hidden gems, deep cuts and new discoveries",
        bgColor:"#4d405d",
        type:"Playlist",
        artists:"Made for Jonty Dhabhai"
    },
    {   
        id:1,
        name: "Daily Mix 1",
        image: img9,
        desc:"Pritam, Vishal-Shekhar, Arijit Singh and more",
        bgColor:"#28747b",
        type:"Public Playlist",
        artists:"Pritam and Arijit Singh"
    },
    {   
        id:2,
        name: "Daily Mix 2",
        image: img10,
        desc:"Silk Route, Lucky Ali, Abhay Jodhpurkar and more",
        bgColor:"#838516",
        type:"Public Playlist",
        artists:"Silk Route and Lucky Ali"
    },
    {   
        id:3,
        name: "Daily Mix 3",
        image: img16,
        desc:"Justin Bieber, Shawn Mendes, The Kid LAROI and more",
        bgColor:"#893928",
        type:"Public Playlist",
        artists:"Justin Bieber and Shawn Mendes"
    },
    {   
        id:4,
        name: "Daily Mix 4",
        image: img11,
        desc:"Karan Sehmbi, Tulsi Kumar, Amrita Singh and more",
        bgColor:"#6a5360",
        type:"Public Playlist",
        artists:"Karan Sehmbi and Tulsi Kumar"
    },
    {   
        id:5,
        name: "Daily Mix 6",
        image: img15,
        desc:"Drake and Kanye West",
        bgColor:"#55589d",
        type:"Public Playlist",
        artists:"Drake and Kanye West",
        about:"About recommendations and the impact of promotion"
    }
]

export const songsData = [
    {
        id:0,
        name: "One Dance",
        image: img1,
        file:song1,
        desc:"Drake, Wizkid, Kyla",
        album:"Views",
        bgColor:"#4a604f",
        duration:"2:53"
    },
    {
        id:1,
        name: "Heartless",
        image: img2,
        file:song2,
        desc:"Kanye West",
        album:"808s & Heartbreak",
        bgColor:"#57403d",
        duration:"3:31"
    },
    {
        id:2,
        name: "Timeless (feat Playboi Carti)",
        image: img3,
        file:song3,
        desc:"The Weeknd, Playboi Carti",
        album:"Hurry Up Tomorrow",
        bgColor:"#33333f",
        duration:"4:16"
    },
    {
        id:3,
        name: "Passionfruit",
        image: img4,
        file:song1,
        desc:"Drake",
        album:"More Life",
        bgColor:"#6b4f33",
        duration:"4:58"
    },
    {
        id:4,
        name: "Flashing Lights",
        image: img5,
        file:song2,
        desc:"Kanye West, Dwele",
        album:"Graduation",
        bgColor:"#885d46",
        duration:"3:57"
    },
    {
        id:5,
        name: "Starboy",
        image: img14    ,
        file:song3,
        desc:"The Weeknd, Daft Punk",
        album:"Starboy",
        bgColor:"#5f3d53",
        duration:"3:50"
    },
    {
        id:6,
        name: "Song Seven",
        image: img7,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        bgColor:"#56633f",
        duration:"2:18"
    },
    {
        id:7,
        name: "Song Eight",
        image: img12,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        bgColor:"#394f64",
        duration:"2:35"
    }
]

export const libraryData = [
    {
        id: 1,
        title: "Liked Songs",
        subtitle: "Playlist - 41 songs",
        image: like_icon,
        bgColor: "#5038a0",
        type: "liked",
        pinned: true
    },
    {
        id: 2,
        title: "The Weeknd",
        subtitle: "Artist",
        image: songsData[0].image,
        bgColor: songsData[0].bgColor,
        active: true
    },
    {
        id: 3,
        title: "Kanye West",
        subtitle: "Artist",
        image: songsData[1].image,
        bgColor: songsData[1].bgColor
    },
    {
        id: 4,
        title: "Tyler, The Creator",
        subtitle: "Artist",
        image: songsData[2].image,
        bgColor: songsData[2].bgColor
    },
    {
        id: 5,
        title: "Drake",
        subtitle: "Artist",
        image: songsData[3].image,
        bgColor: songsData[3].bgColor
    },
    {
        id: 6,
        title: "Jonty",
        subtitle: "Playlist - Spotify",
        image: albumsData[0].image,
        bgColor: albumsData[0].bgColor,
        square: true
    },
    {
        id: 7,
        title: "Daily Mix",
        subtitle: "Playlist - Jeet Dhabhai",
        image: albumsData[1].image,
        bgColor: albumsData[1].bgColor,
        square: true
    }
]
