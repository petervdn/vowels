export function midiToFrequency(noteNumber: number) {
  return (440 / 32) * 2 ** ((noteNumber - 9) / 12);
}
