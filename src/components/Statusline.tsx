import React from "react";
import BatteryPanel from "./BatteryPanel";
import ClockPanel from "./ClockPanel";
import UserPanel from "./UserPanel";

export const PanelName = {
  battery: "battery",
  clock: "clock",
  user: "user",
} as const;

export type PanelName = typeof PanelName[keyof typeof PanelName];

export type StatuslineProps = React.HTMLProps<HTMLDivElement> & {
  panels?: PanelName[];
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
    const { panels = [], ...divProps } = this.props;
    const panelComponents: React.ReactNode[] = panels.map((panel) => {
      switch (panel) {
        case PanelName.battery:
          return <BatteryPanel />;
        case PanelName.clock:
          return <ClockPanel />;
        case PanelName.user:
          return <UserPanel />;
      }
    });

    return (
      <footer
        {...divProps}
        style={{
          backgroundColor: "black",
          borderTopStyle: "solid",
          borderTopWidth: 1,
          bottom: 0,
          color: "white",
          display: "flex",
          height: 40,
          position: "absolute",
          width: "100%",
          ...divProps.style,
        }}
      >
        {panelComponents}
      </footer>
    );
  }
}

export default Statusline;
