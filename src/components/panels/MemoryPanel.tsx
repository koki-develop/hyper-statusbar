import osu from 'node-os-utils';
import React from 'react';
import { MdMemory } from 'react-icons/md';
import Panel from './Panel';

export type MemoryPanelProps = {
  //
};

export type MemoryPanelState = {
  totalMbText: string;
  usageMbText: string;
};

class MemoryPanel extends React.Component<MemoryPanelProps, MemoryPanelState> {
  private _intervalId?: number;

  constructor(props: MemoryPanelProps) {
    super(props);
    this.state = {
      totalMbText: '??',
      usageMbText: '??',
    };
  }

  componentDidMount() {
    this._intervalId = window.setInterval(() => {
      osu.mem.used().then(memory => {
        this.setState({
          totalMbText: Math.trunc(memory.totalMemMb).toString(),
          usageMbText: Math.trunc(memory.usedMemMb).toString(),
        });
      });
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
