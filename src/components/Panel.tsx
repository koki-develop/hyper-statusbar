import React from "react";

export type PanelProps = {
  children: React.ReactNode;
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
          padding: "0px 16px",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Panel;
