import { FormantFilter } from "./createFormantFilter";

export type Chord = Array<number>;

export type Choir = {
  chords: Array<Chord>;
  voices: Array<Voice>;
  gain: GainNode;
};

export type Voice = {
  oscillator: OscillatorNode;
  formantFilter: FormantFilter;
};

export type AudioChain = {
  input: AudioNode;
  output: AudioNode;
};

export type Vowel = {
  name: string;
  formants: Array<Formant>;
};

export type Formant = {
  frequency: number;
  amplitude: number;
};
