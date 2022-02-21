import React from "react";

export type StatuslineProps = {
  //
};

const Statusline: React.VFC<StatuslineProps> = React.memo((props) => {
  console.log("hello from Statusline");

  return null;
});

Statusline.displayName = "Statusline";

export default Statusline;
