import { ChordView } from "./ChordView";
import React from "react";
import { Voices } from "../utils/types";
import { progressToChord } from "../utils/progressToChord";

type Props = {
  voices: Voices | undefined;
};

export const VoicesView = ({ voices }: Props) => {
  const onChordClick = (chordIndex: number) => {
    if (voices) {
      progressToChord(voices, chordIndex, [0.2, 0.5], 0.3);
    }
  };
  return (
    <div>
      <h2>Voices</h2>
      {voices &&
        voices.chords.map((chord, index) => (
          <ChordView
            key={index}
            chord={chord}
            onClick={() => onChordClick(index)}
          />
        ))}
    </div>
  );
};
