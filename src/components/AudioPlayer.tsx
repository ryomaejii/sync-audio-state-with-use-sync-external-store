import { useState } from 'react';
import drumSound from '../assets/drum.mp3';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <p>The audio is {isPlaying ? 'playing' : 'paused'}.</p>
      <audio
        src={drumSound}
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
}
