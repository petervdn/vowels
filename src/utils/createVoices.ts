import { midiToFrequency } from "./midiToFrequency";
import { Chord, Voices } from "./types";
import { createFilterChain } from "./createFilterChain";
import { createFormantFilter } from "./createFormantFilter";
import { vowels } from "../data/vowels";

export const createVoices = (
  context: AudioContext,
  chords: Array<Chord>,
  numberOfFilters = 0
): Voices => {
  const mainGain = context.createGain();
  mainGain.gain.value = 1;
  mainGain.connect(context.destination);

  chords.forEach((chord) => {
    if (chord.length !== chords[0].length) {
      throw new Error("All chords must be of equal length");
    }
  });

  // use first chord to create voices per note
  const oscillators = chords[0].map((noteNumber) => {
    const osc = context.createOscillator();
    const oscGain = context.createGain();

    const filters = createFormantFilter(context, 12, vowels[2]);

    osc.type = "sawtooth";
    osc.frequency.value = midiToFrequency(noteNumber);

    oscGain.gain.value = 0.2;

    osc.connect(filters.input);
    filters.output.connect(oscGain);
    oscGain.connect(mainGain);

    osc.start(0);

    return osc;
  });

  return {
    chords,
    oscillators,
    gain: mainGain,
  };
};
