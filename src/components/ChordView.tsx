import React from "react";
import { Chord } from "../utils/types";

type Props = {
  chord: Chord;
  onClick: () => void;
};

export const ChordView = ({ chord, onClick }: Props) => {
  const label = JSON.stringify(chord);
  return (
    <button key={label} onClick={onClick}>
      {label}
    </button>
  );
};
