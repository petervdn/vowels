import React, { useEffect, useState } from "react";
import "./App.css";
import { Vowels } from "./components/Vowels";
import { createChoir } from "./utils/createChoir";
import { ChoirView } from "./components/ChoirView";
import { Choir, Chord } from "./utils/types";
import { ChordList } from "./components/ChordList";
import { progressToChord } from "./utils/progressToChord";

const context = new AudioContext();
const chords: Array<Chord> = [
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
      setChoir(createChoir(context, chords[0]));
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

  const onChordClick = (chord: Chord) => {
    if (choir) {
      progressToChord(choir, chord, [0.2, 0.3], 0.3);
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
        <ChordList chords={chords} onChordClick={onChordClick} />
        <ChoirView choir={choir} />
      </div>
    </>
  );
}

export default App;
