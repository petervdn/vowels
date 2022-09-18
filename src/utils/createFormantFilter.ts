import { Vowel } from "./types";

export const createFormantFilter = (
  context: AudioContext,
  resonance: number,
  initialVowel: Vowel
) => {
  const inGain = context.createGain();
  const outGain = context.createGain();

  const filters = initialVowel.formants.map(({ frequency }) => {
    const filter = context.createBiquadFilter();
    filter.frequency.value = frequency;
    filter.type = "bandpass";
    filter.Q.value = resonance;

    inGain.connect(filter);
    filter.connect(outGain);
  });

  return {
    filters,
    input: inGain,
    output: outGain,
  };
};
