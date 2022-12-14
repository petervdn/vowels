import { tweenAudioParam } from "./tweenAudioParam";
import { midiToFrequency } from "./midiToFrequency";
import { Choir, Chord } from "./types";

const randomInRange = (min: number, max: number) => {
  const range = Math.random() * (max - min);
  return min + range;
};

export const progressToChord = (
  { voices }: Choir,
  chord: Chord,
  tweenDuration: number | [number, number],
  octaveShiftChance = 0
) => {
  let duration =
    typeof tweenDuration === "number"
      ? tweenDuration
      : randomInRange(tweenDuration[0], tweenDuration[1]);

  if (chord) {
    voices.forEach((voice, index) => {
      const noteNumber = chord[index];
      let octaveShift = 0;
      if (Math.random() < octaveShiftChance) {
        octaveShift = -1; //Math.random() > 0.5 ? 1 : -1;
      }
      const octaveShiftedNoteNumber = noteNumber + octaveShift * 12;
      const frequency =
        midiToFrequency(octaveShiftedNoteNumber) * (1 + Math.random() * 0.01);

      tweenAudioParam(voice.oscillator.frequency, frequency, duration);
    });
  }
};
