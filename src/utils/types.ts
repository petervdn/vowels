import { midiToFrequency } from "./midiToFrequency";

export type Chord = Array<number>;
export type ChordProgression = Array<Chord>;

export type Voices = {
  progression: ChordProgression;
  oscillators: Array<OscillatorNode>;
  gain: GainNode;
};
