export type Chord = Array<number>;

export type Voices = {
  chords: Array<Chord>;
  oscillators: Array<OscillatorNode>;
  gain: GainNode;
};

export type Vowel = {
  name: string;
  formants: Array<Formant>;
};

export type Formant = {
  frequency: number;
  amplitude: number;
};
