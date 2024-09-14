import { AudioPlayerBad } from './components/AudioPlayerBad';
import { AudioPlayerWithRefAndState } from './components/AudioPlayerWithRefAndState';
import { AudioPlayerWithState } from './components/AudioPlayerWithState';
import { AudioPlayerWithSyncExternalStore } from './components/AudioPlayerWithSyncExternalStore';

function App() {
  return (
    <>
      <AudioPlayerBad />
      <AudioPlayerWithState />
      <AudioPlayerWithRefAndState />
      <AudioPlayerWithSyncExternalStore />
    </>
  );
}

export default App;
