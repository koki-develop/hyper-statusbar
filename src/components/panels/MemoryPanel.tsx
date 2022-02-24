import osu from 'node-os-utils';
import React from 'react';
import { MdMemory } from 'react-icons/md';
import Panel from '.';

export type MemoryPanelProps = {
  //
};

export type MemoryPanelState = {
  totalMbText: string;
  usageMbText: string;
};

class MemoryPanel extends React.Component<MemoryPanelProps, MemoryPanelState> {
  static panelName = 'memory';
  private _intervalId?: number;

  constructor(props: MemoryPanelProps) {
    super(props);
    this.state = {
      totalMbText: '??',
      usageMbText: '??',
    };
    this.loadMemoryUsage = this.loadMemoryUsage.bind(this);
  }

  loadMemoryUsage() {
    osu.mem.used().then(memory => {
      this.setState({
        totalMbText: Math.trunc(memory.totalMemMb).toString(),
        usageMbText: Math.trunc(memory.usedMemMb).toString(),
      });
    });
  }

  componentDidMount() {
    this.loadMemoryUsage();
    this._intervalId = window.setInterval(() => {
      this.loadMemoryUsage();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

  render() {
    return (
      <Panel icon={MdMemory}>
        {this.state.usageMbText}MB / {this.state.totalMbText}MB
      </Panel>
    );
  }
}

export default MemoryPanel;
