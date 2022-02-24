import React from 'react';
import { MdMemory } from 'react-icons/md';
import { loadMemory } from '@/lib/memory';
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
    this._loadMemory = this._loadMemory.bind(this);
  }

  componentDidMount() {
    this._loadMemory();
    this._intervalId = window.setInterval(() => {
      this._loadMemory();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

  private _loadMemory() {
    loadMemory().then(memory => {
      this.setState({
        totalMbText: Math.trunc(memory.totalMb).toString(),
        usageMbText: Math.trunc(memory.usedMb).toString(),
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
