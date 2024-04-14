import { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const musicBaseUrl = "/musics/Between-Two-World";
  const [isLoad, setIsLoad] = useState(false);
  const [musicSrc, setMusicSrc] = useState(`${musicBaseUrl}1.mp3`);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      }

      audioRef.current.play();
      setMusicSrc(`${musicBaseUrl}.mp3`);
    }
  }, [isLoad]);
  return (
    <>
      <audio
        onLoad={() => setIsLoad(true)}
        src={musicSrc}
        controls
        autoPlay
        ref={audioRef}
      >
        <source src={musicSrc} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default MusicPlayer;
