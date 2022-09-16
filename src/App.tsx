import React, { useEffect, useState } from "react";
import "./App.css";
import { createVoices, Voices } from "./utils/types";

const context = new AudioContext();
const progression = [
  [60, 63, 67],
  [62, 65, 69],
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
        <div>
          {voices &&
            voices.progression.map((chord) => {
              const label = JSON.stringify(chord);
              return <button key={label}>{label}</button>;
            })}
        </div>
      </div>
    </>
  );
}

export default App;
