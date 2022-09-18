import { AudioChain, Vowel } from "./types";

export const createFormantFilter = (
  context: AudioContext,
  resonance: number,
  initialVowel: Vowel
): AudioChain => {
  const inGain = context.createGain();
  const outGain = context.createGain();

  initialVowel.formants.map(({ frequency }) => {
    const filter = context.createBiquadFilter();
    filter.frequency.value = frequency;
    filter.type = "bandpass";
    filter.Q.value = resonance;

    inGain.connect(filter);
    filter.connect(outGain);
  });

  return {
    input: inGain,
    output: outGain,
  };
};
