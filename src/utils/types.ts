import { midiToFrequency } from "./midiToFrequency";

export type Chord = Array<number>;
export type ChordProgression = Array<Chord>;

export type Voices = {
  progression: ChordProgression;
  oscillators: Array<OscillatorNode>;
  gain: GainNode;
};

export const createVoices = (
  context: AudioContext,
  progression: ChordProgression
): Voices => {
  const mainGain = context.createGain();
  mainGain.gain.value = 1;
  mainGain.connect(context.destination);

  const oscillators = progression[0].map((noteNumber) => {
    const osc = context.createOscillator();
    const oscGain = context.createGain();

    osc.frequency.value = midiToFrequency(noteNumber);
    oscGain.gain.value = 0.2;

    osc.connect(oscGain);
    oscGain.connect(mainGain);

    osc.start(0);

    return osc;
  });

  return {
    progression,
    oscillators,
    gain: mainGain,
  };
};
