import React from "react";
import { Chord } from "../utils/types";
import { ChordListItem } from "./ChordListItem";

type Props = {
  chords: Array<Chord>;
  onChordClick: (chord: Chord) => void;
};

export const ChordList = ({ chords, onChordClick }: Props) => {
  return (
    <>
      <h3>Chords</h3>
      {chords.map((chord, index) => (
        <ChordListItem
          key={index}
          chord={chord}
          onClick={() => onChordClick(chord)}
        />
      ))}
    </>
  );
};
