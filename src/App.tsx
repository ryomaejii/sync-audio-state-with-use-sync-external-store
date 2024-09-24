import { AudioPlayerManual } from './components/AudioPlayerManual';
import { AudioPlayerWithRefAndState } from './components/AudioPlayerWithRefAndState';
import { AudioPlayerWithState } from './components/AudioPlayerWithState';
import { AudioPlayerWithSyncExternalStore } from './components/AudioPlayerWithSyncExternalStore';

function App() {
  return (
    <>
      <AudioPlayerManual />
      <AudioPlayerWithState />
      <AudioPlayerWithRefAndState />
      <AudioPlayerWithSyncExternalStore />
    </>
  );
}

export default App;
