import React, { useEffect, useState } from "react";
import "./App.css";
import { Voices } from "./utils/types";
import { createVoices } from "./utils/createVoices";
import { Vowels } from "./components/Vowels";
import { VoicesView } from "./components/VoicesView";

const context = new AudioContext();
const progression = [
  [60 - 12, 60, 63, 67],
  [62 - 12, 62, 65, 69],
  [67 - 12, 62, 67, 71],
];

function App() {
  const [voices, setVoices] = useState<Voices>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {}, []);

  const start = () => {
    if (!voices) {
      setVoices(createVoices(context, progression));
    } else if (!isPlaying) {
      voices.gain.gain.value = 1;
    }
    setIsPlaying(true);
  };

  const stop = () => {
    if (voices && isPlaying) {
      voices.gain.gain.value = 0;
      setIsPlaying(false);
    }
  };

  return (
    <>
      <h1>Vowels</h1>
      <div>
        <button onClick={() => (isPlaying ? stop() : start())}>
          {isPlaying ? "stop" : "start"}
        </button>
        <Vowels />
        <VoicesView voices={voices} />
      </div>
    </>
  );
}

export default App;
