import drumSound from '../assets/ drum.mp3';

export function AudioPlayer() {
  return <audio src={drumSound} controls />;
}
