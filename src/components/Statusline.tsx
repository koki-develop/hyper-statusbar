import React from "react";
import BatteryPanel from "./BatteryPanel";

export type StatuslineProps = {
  //
};

export type StatuslineState = {
  //
};

class Statusline extends React.Component<StatuslineProps, StatuslineState> {
  constructor(props: StatuslineProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer
        style={{
          backgroundColor: "black",
          bottom: 0,
          color: "white",
          position: "absolute",
          width: "100%",
        }}
      >
        <BatteryPanel />
      </footer>
    );
  }
}

export default Statusline;