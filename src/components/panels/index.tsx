import React from 'react';
import { IconType } from 'react-icons';
import BatteryPanel from './BatteryPanel';
import ClockPanel from './ClockPanel';
import CpuPanel from './CpuPanel';
import IpPanel from './IpPanel';
import MemoryPanel from './MemoryPanel';
import UserPanel from './UserPanel';

const allPanels = [
  BatteryPanel,
  ClockPanel,
  CpuPanel,
  IpPanel,
  MemoryPanel,
  UserPanel,
];

export const getPanels = (names: string[]) => {
  const panels: React.ReactNode[] = [];

  for (const name of names) {
    const panel = allPanels.find(panel => panel.panelName === name);
    if (panel) {
      panels.push(React.createElement(panel));
    }
  }

  return panels;
};

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
          alignItems: 'center',
          display: 'flex',
          padding: '0px 8px',
          whiteSpace: 'nowrap',
          width: '100%',
        }}
      >
        {React.createElement(this.props.icon, { style: { marginRight: 4 } })}
        {this.props.children}
      </div>
    );
  }
}

export default Panel;
