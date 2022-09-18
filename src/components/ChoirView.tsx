import { ChordView } from "./ChordView";
import React from "react";
import { progressToChord } from "../utils/progressToChord";
import { Choir } from "../utils/types";

type Props = {
  choir: Choir | undefined;
};

export const ChoirView = ({ choir }: Props) => {
  const onChordClick = (chordIndex: number) => {
    if (choir) {
      progressToChord(choir, chordIndex, [0.2, 0.5], 0.3);
    }
  };
  return (
    <div>
      <h2>Choir</h2>
      {choir &&
        choir.chords.map((chord, index) => (
          <ChordView
            key={index}
            chord={chord}
            onClick={() => onChordClick(index)}
          />
        ))}
    </div>
  );
};
