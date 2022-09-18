import { useState } from "react";
import { Vowel } from "../utils/types";
import { VowelView } from "./VowelView";
import { vowels } from "../data/vowels";

export const Vowels = () => {
  const [vowelsList, setVowelsList] = useState<Array<Vowel>>(vowels);
  return (
    <div>
      <h2>Available vowels</h2>
      <div style={{ display: "flex" }}>
        {vowelsList.map((vowel) => (
          <VowelView key={vowel.name} vowel={vowel} />
        ))}
      </div>
    </div>
  );
};
