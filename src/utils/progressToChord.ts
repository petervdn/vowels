import { Voices } from "./types";
import { tweenAudioParam } from "./tweenAudioParam";
import { midiToFrequency } from "./midiToFrequency";

const randomInRange = (min: number, max: number) => {
  const range = Math.random() * (max - min);
  return min + range;
};

export const progressToChord = (
  { chords, oscillators }: Voices,
  toIndex: number,
  tweenDuration: number | [number, number],
  octaveShiftChance = 0
) => {
  const chord = chords[toIndex];
  let duration =
    typeof tweenDuration === "number"
      ? tweenDuration
      : randomInRange(tweenDuration[0], tweenDuration[1]);

  if (chord) {
    oscillators.forEach((osc, index) => {
      const noteNumber = chord[index];
      let octaveShift = 0;
      if (Math.random() < octaveShiftChance) {
        octaveShift = Math.random() > 0.5 ? 1 : -1;
      }
      tweenAudioParam(
        osc.frequency,
        midiToFrequency(noteNumber + octaveShift * 12),
        duration
      );
    });
  }
};
