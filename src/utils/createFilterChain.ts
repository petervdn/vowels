import { AudioChain } from "./types";

export const createFilterChain = (
  context: AudioContext,
  amount: number,
  frequency: number,
  resonance: number
): AudioChain => {
  if (!amount) {
    throw new Error("Can not create filter chain with 0 filters");
  }
  const filters: Array<BiquadFilterNode> = [];
  Array.from(Array(amount).keys()).forEach((index) => {
    const filter = context.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = frequency;
    filter.Q.value = resonance;

    const previousFilter = filters[index - 1];
    if (previousFilter) {
      previousFilter.connect(filter);
    }
    filters.push(filter);
  });
  return {
    input: filters[0],
    output: filters[filters.length - 1],
  };
};
