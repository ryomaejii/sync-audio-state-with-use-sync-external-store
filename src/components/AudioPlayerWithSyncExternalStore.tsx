import drumSound from '../assets/drum.mp3';
import { useCallback, useRef, useSyncExternalStore } from 'react';

function useAudioState() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const getIsPlayingSnapshot = () =>
    audioRef.current ? !audioRef.current.paused : false;

  const subscribeToIsPlaying = useCallback((callback: () => void) => {
    if (audioRef.current) {
      audioRef.current.addEventListener('play', callback);
      audioRef.current.addEventListener('pause', callback);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('play', callback);
        audioRef.current.removeEventListener('pause', callback);
      }
    };
  }, []);

  const isPlaying = useSyncExternalStore(
    subscribeToIsPlaying,
    getIsPlayingSnapshot
  );

  return {
    audioRef,
    isPlaying,
  };
}

export function AudioPlayerWithSyncExternalStore() {
  const { audioRef, isPlaying } = useAudioState();

  return (
    <div>
      <h2>Audio Player With Sync External Store</h2>
      <p>The audio is {isPlaying ? 'playing' : 'paused'}.</p>
      <audio ref={audioRef} src={drumSound} controls />
    </div>
  );
}
