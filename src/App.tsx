import { AudioPlayerBad } from './components/AudioPlayerBad';
import { AudioPlayerWithRefAndState } from './components/AudioPlayerWithRefAndState';
import { AudioPlayerWithState } from './components/AudioPlayerWithState';

function App() {
  return (
    <>
      <AudioPlayerBad />
      <AudioPlayerWithState />
      <AudioPlayerWithRefAndState />
    </>
  );
}

export default App;
