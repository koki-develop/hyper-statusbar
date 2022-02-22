import React from "react";
import BatteryPanel from "./BatteryPanel";
import ClockPanel from "./ClockPanel";
import UserPanel from "./UserPanel";

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
        <ClockPanel />
        <UserPanel />
      </footer>
    );
  }
}

export default Statusline;
