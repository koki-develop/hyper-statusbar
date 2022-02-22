import React from "react";
import BatteryPanel from "./BatteryPanel";
import CpuPanel from "./CpuPanel";

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
          display: "flex",
          position: "absolute",
          width: "100%",
        }}
      >
        <BatteryPanel />
        <CpuPanel />
      </footer>
    );
  }
}

export default Statusline;
