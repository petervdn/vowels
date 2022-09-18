import { midiToFrequency } from "./midiToFrequency";
import { Choir, Chord, Voice } from "./types";
import { createFormantFilter } from "./createFormantFilter";
import { vowels } from "../data/vowels";

export const createChoir = (
  context: AudioContext,
  chords: Array<Chord>
): Choir => {
  const mainGain = context.createGain();
  mainGain.gain.value = 1;
  mainGain.connect(context.destination);

  chords.forEach((chord) => {
    if (chord.length !== chords[0].length) {
      throw new Error("All chords must be of equal length");
    }
  });

  // use first chord to create voices per note
  const voices: Array<Voice> = chords[0].map((noteNumber) => {
    const oscillator = context.createOscillator();
    const oscillatorGain = context.createGain();

    const formantFilter = createFormantFilter(context, 12, vowels[2]);

    oscillator.type = "sawtooth";
    oscillator.frequency.value = midiToFrequency(noteNumber);

    oscillatorGain.gain.value = 0.2;

    oscillator.connect(formantFilter.input);
    formantFilter.output.connect(oscillatorGain);
    oscillatorGain.connect(mainGain);

    oscillator.start(0);

    return { oscillator, formantFilter };
  });

  return {
    chords,
    voices,
    gain: mainGain,
  };
};
