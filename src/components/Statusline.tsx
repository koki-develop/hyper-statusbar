import React from "react";
import BatteryPanel from "./BatteryPanel";
import ClockPanel from "./ClockPanel";
import UserPanel from "./UserPanel";

export type StatuslineProps = React.HTMLProps<HTMLDivElement>;

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
        {...this.props}
        style={{
          backgroundColor: "black",
          borderTopStyle: "solid",
          borderTopWidth: 1,
          bottom: 0,
          color: "white",
          display: "flex",
          position: "absolute",
          width: "100%",
          ...this.props.style,
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
