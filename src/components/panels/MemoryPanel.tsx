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
    this._loadMemoryUsage = this._loadMemoryUsage.bind(this);
  }

  componentDidMount() {
    this._loadMemoryUsage();
    this._intervalId = window.setInterval(() => {
      this._loadMemoryUsage();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

  private _loadMemoryUsage() {
    osu.mem.used().then(memory => {
      this.setState({
        totalMbText: Math.trunc(memory.totalMemMb).toString(),
        usageMbText: Math.trunc(memory.usedMemMb).toString(),
      });
    });
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
