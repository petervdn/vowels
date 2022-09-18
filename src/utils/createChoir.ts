import { midiToFrequency } from "./midiToFrequency";
import { Choir, Chord, Voice } from "./types";
import { createFormantFilter } from "./createFormantFilter";
import { vowels } from "../data/vowels";

export const createChoir = (
  context: AudioContext,
  initialChord: Chord
): Choir => {
  const mainGain = context.createGain();
  mainGain.gain.value = 1;
  mainGain.connect(context.destination);

  // use first chord to create voices per note
  const voices: Array<Voice> = initialChord.map((noteNumber, index) => {
    const oscillator = context.createOscillator();
    const oscillatorGain = context.createGain();

    const vowel = vowels[index];
    const formantFilter = createFormantFilter(context, 33, vowel);

    oscillator.type = "sawtooth";
    oscillator.frequency.value = midiToFrequency(noteNumber);

    oscillatorGain.gain.value = 0.2;

    oscillator.connect(formantFilter.input);
    formantFilter.output.connect(oscillatorGain);
    oscillatorGain.connect(mainGain);

    oscillator.start(0);

    return { oscillator, formantFilter, vowel };
  });

  return {
    voices,
    gain: mainGain,
  };
};
