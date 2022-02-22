import React from "react";
import { IconType } from "react-icons";

export type PanelProps = {
  children: React.ReactNode;
  icon: IconType;
};

export type PanelState = {
  //
};

class Panel extends React.Component<PanelProps, PanelState> {
  constructor(props: PanelProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          padding: "0px 8px",
        }}
      >
        {React.createElement(this.props.icon, { style: { marginRight: 4 } })}
        {this.props.children}
      </div>
    );
  }
}

export default Panel;
