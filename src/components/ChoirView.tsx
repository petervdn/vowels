import React from "react";

import { Choir } from "../utils/types";

type Props = {
  choir: Choir | undefined;
};

export const ChoirView = ({ choir }: Props) => {
  return (
    <div>
      <h2>Choir</h2>
      {choir && <div></div>}
    </div>
  );
};
