import { Voices } from "./types";
import { tweenAudioParam } from "./tweenAudioParam";
import { midiToFrequency } from "./midiToFrequency";

export const progressToChord = (
  { progression, oscillators }: Voices,
  toIndex: number
) => {
  const chord = progression[toIndex];

  if (chord) {
    oscillators.forEach((osc, index) => {
      const noteNumber = chord[index];
      tweenAudioParam(osc.frequency, midiToFrequency(noteNumber), 1);
    });
  }
};
