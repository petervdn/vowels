export type Chord = Array<number>;

export type Choir = {
  voices: Array<Voice>;
  gain: GainNode;
};

export type Voice = {
  oscillator: OscillatorNode;
  formantFilter: AudioChain;
  vowel: Vowel;
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
