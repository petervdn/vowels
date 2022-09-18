import React, { useEffect, useState } from "react";
import "./App.css";
import { Vowels } from "./components/Vowels";
import { createChoir } from "./utils/createChoir";
import { ChoirView } from "./components/ChoirView";
import { Choir } from "./utils/types";

const context = new AudioContext();
const progression = [
  [60 - 12, 60, 63, 67],
  [62 - 12, 62, 65, 69],
  [67 - 12, 62, 67, 71],
];

function App() {
  const [choir, setChoir] = useState<Choir>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {}, []);

  const start = () => {
    if (!choir) {
      setChoir(createChoir(context, progression));
    } else if (!isPlaying) {
      choir.gain.gain.value = 1;
    }
    setIsPlaying(true);
  };

  const stop = () => {
    if (choir && isPlaying) {
      choir.gain.gain.value = 0;
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
        <ChoirView choir={choir} />
      </div>
    </>
  );
}

export default App;
