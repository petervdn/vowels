import { Vowel } from "../utils/types";

export const vowels: Array<Vowel> = [
  {
    name: "a",
    formants: [
      { frequency: 850, amplitude: 1 },
      { frequency: 1610, amplitude: 1 },
    ],
  },
  {
    name: "e",
    formants: [
      { frequency: 390, amplitude: 1 },
      { frequency: 2200, amplitude: 1 },
    ],
  },
  {
    name: "i",
    formants: [
      { frequency: 240, amplitude: 1 },
      { frequency: 2400, amplitude: 1 },
    ],
  },
];
