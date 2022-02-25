import React from 'react';
import { MdMemory } from 'react-icons/md';
import { loadMemory, Memory } from '@/lib/memory';
import Panel from '.';

export type MemoryPanelProps = {
  //
};

export type MemoryPanelState = {
  memory: Memory | null;
};

class MemoryPanel extends React.Component<MemoryPanelProps, MemoryPanelState> {
  static panelName = 'memory';
  private _intervalId?: number;

  constructor(props: MemoryPanelProps) {
    super(props);
    this.state = {
      memory: null,
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
        memory,
      });
    });
  }

  render() {
    return (
      <Panel icon={MdMemory}>
        {this.state.memory
          ? `${this.state.memory.usedMb}MB / ${this.state.memory.totalMb}MB`
          : '??MB / ??MB'}
      </Panel>
    );
  }
}

export default MemoryPanel;
