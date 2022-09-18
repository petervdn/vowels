import { Formant } from "../utils/types";
import { useState } from "react";

type Props = {
  formant: Formant;
};

export const FormantView = ({
  formant: { frequency: initialFrequency, amplitude: initialAmplitude },
}: Props) => {
  const [frequency, setFrequency] = useState(initialFrequency);
  const [amplitude, setAmplitude] = useState(initialAmplitude);
  return (
    <div>
      <label>
        Frequency
        <input
          type="number"
          value={frequency}
          onChange={({ target: { value } }) => setFrequency(parseFloat(value))}
        />
      </label>
      <label>
        Amplitude
        <input
          type="number"
          value={amplitude}
          onChange={({ target: { value } }) => setAmplitude(parseFloat(value))}
        />
      </label>
    </div>
  );
};
