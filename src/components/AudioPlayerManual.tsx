import { useState } from 'react';
import drumSound from '../assets/drum.mp3';

export function AudioPlayerManual() {
  const [isPlaying, setIsPlaying] = useState(false);

  /**
   * 手動で再生状態を変更している
   * 要素の実際の再生状態が必ずしも同じだとは限らない
   */
  const onPlay = () => setIsPlaying(true);
  const onPause = () => setIsPlaying(false);

  return (
    <div>
      <h2>Bad Audio Player</h2>
      <p>The audio is {isPlaying ? 'playing' : 'paused'}.</p>
      <audio src={drumSound} controls onPlay={onPlay} onPause={onPause} />
    </div>
  );
}
