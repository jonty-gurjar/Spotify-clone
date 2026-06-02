import { useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";
import { PlayerContext } from "./playerContext";

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const volumeBg = useRef();
    const volumeBar = useRef();
    const playRequestedRef = useRef(false);

    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setPlayStatus] = useState(false);
    const [progress, setProgress] = useState(0);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }

    })

    const play = async() => {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        try {
            await audio.play();
            setPlayStatus(true);
        } catch {
            setPlayStatus(false);
        }
    }

    const pause = () => {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        audio.pause();
        playRequestedRef.current = false;
        setPlayStatus(false);
    }

    const playWithId = (id) => {
        const selectedTrack = songsData[id];

        if (!selectedTrack) {
            return;
        }

        if (selectedTrack.id === track.id) {
            if (!audioRef.current?.paused) {
                pause();
            } else {
                play();
            }
            return;
        }

        setTrack(selectedTrack);
        playRequestedRef.current = true;
    }

    const previous = () => {
        if (track.id > 0) {
            playRequestedRef.current = true;
            setTrack(songsData[track.id - 1]);
        }
    }

    const next = () => {
        if (track.id < songsData.length - 1) {
            playRequestedRef.current = true;
            setTrack(songsData[track.id + 1]);
        }
    }

    const seekSong = (e) => {
        const audio = audioRef.current;
        const seekElement = e.currentTarget;

        if (!audio || !seekElement || !Number.isFinite(audio.duration)) {
            return;
        }

        audio.currentTime = (e.nativeEvent.offsetX / seekElement.offsetWidth) * audio.duration;
    }

    const setVolume = (value) => {
        const audio = audioRef.current;
        const volume = Math.max(0, Math.min(1, value));

        if (audio) {
            audio.volume = volume;
        }

        if (volumeBar.current) {
            volumeBar.current.style.width = `${Math.round(volume * 100)}%`;
        }
    }

    const changeVolume = (e) => {
        if (!volumeBg.current) {
            return;
        }

        setVolume(e.nativeEvent.offsetX / volumeBg.current.offsetWidth);
    }

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        const handleTimeUpdate = () => {
            const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
            const progress = duration ? Math.floor((audio.currentTime / duration) * 100) : 0;

            setProgress(progress);

            if (seekBar.current) {
                seekBar.current.style.width = progress + "%";
            }

            setTime({
                currentTime: {
                    second: Math.floor(audio.currentTime % 60),
                    minute: Math.floor(audio.currentTime / 60)
                },
                totalTime: {
                    second: Math.floor(duration % 60),
                    minute: Math.floor(duration / 60)
                }
            })
        }

        const handlePlay = () => setPlayStatus(true);
        const handlePause = () => setPlayStatus(false);

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleTimeUpdate);
        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('ended', handlePause);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleTimeUpdate);
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('ended', handlePause);
        };
    }, [])

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        audio.load();

        if (seekBar.current) {
            seekBar.current.style.width = "0%";
        }

        setProgress(0);

        setTime({
            currentTime: {
                second: 0,
                minute: 0
            },
            totalTime: {
                second: 0,
                minute: 0
            }
        })

        if (!playRequestedRef.current) {
            return;
        }

        audio.play().catch(() => {
            setPlayStatus(false);
        });
        playRequestedRef.current = false;
    }, [track])

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        volumeBar,
        volumeBg,
        track, setTrack,
        playStatus, setPlayStatus,
        progress, setProgress,
        time, setTime,
        play, pause,
        playWithId,
        previous,next,
        seekSong,
        changeVolume


    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;
