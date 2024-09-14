import { useState } from 'react';
import drumSound from '../assets/drum.mp3';

export function AudioPlayerWithState() {
  const [isPlaying, setIsPlaying] = useState(false);

  const syncPlayingState: React.EventHandler<
    React.SyntheticEvent<HTMLAudioElement>
  > = (e) => setIsPlaying(e.currentTarget.paused ? false : true);

  return (
    <div>
      <h2>Audio Player With State</h2>
      <p>The audio is {isPlaying ? 'playing' : 'paused'}.</p>
      <audio
        src={drumSound}
        controls
        /**
         * propsが増えてしまう可能性がある
         * propsに指定し忘れると、再生状態が同期されない
         */
        onPlay={syncPlayingState}
        onPause={syncPlayingState}
      />
    </div>
  );
}
