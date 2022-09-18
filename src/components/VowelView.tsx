import { Vowel } from "../utils/types";
import { FormantView } from "./FormantView";

type Props = {
  vowel: Vowel;
};

export const VowelView = ({ vowel: { name, formants } }: Props) => {
  return (
    <div
      style={{
        width: 100,
        backgroundColor: "lightgrey",
        padding: 20,
        marginRight: 5,
      }}
    >
      <h2>{name}</h2>
      {formants.map((formant) => (
        <FormantView key={formant.frequency.toString()} formant={formant} />
      ))}
    </div>
  );
};
