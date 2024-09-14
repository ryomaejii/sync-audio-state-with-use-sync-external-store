import { useEffect, useRef, useState } from 'react';
import drumSound from '../assets/drum.mp3';

export function AudioPlayerWithRefAndState() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    const syncPlayingState = () => {
      setIsPlaying(!audioRef.current?.paused);
    };

    audioRef.current.addEventListener('play', syncPlayingState);
    audioRef.current.addEventListener('pause', syncPlayingState);

    return () => {
      if (!audioRef.current) {
        return;
      }

      audioRef.current.removeEventListener('play', syncPlayingState);
      audioRef.current.removeEventListener('pause', syncPlayingState);
    };
  }, []);

  return (
    <div>
      <h2>Audio Player with Ref and State</h2>
      <p>The audio is {isPlaying ? 'playing' : 'paused'}.</p>
      <audio ref={audioRef} src={drumSound} controls />
    </div>
  );
}
