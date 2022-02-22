import React from "react";
import { BsCpu } from "react-icons/bs";
import Panel from "./Panel";

export type CpuPanelProps = {
  //
};

export type CpuPanelState = {
  //
};

class CpuPanel extends React.Component<CpuPanelProps, CpuPanelState> {
  constructor(props: CpuPanelProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Panel>
        <BsCpu />
      </Panel>
    );
  }
}

export default CpuPanel;
