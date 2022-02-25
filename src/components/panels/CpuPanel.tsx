import React from 'react';
import { BsCpu } from 'react-icons/bs';
import { loadCpuUsage } from '@/lib/cpu';
import Panel from '.';

export type CpuPanelProps = {
  //
};

export type CpuPanelState = {
  percentage: number | null;
};

class CpuPanel extends React.Component<CpuPanelProps, CpuPanelState> {
  static panelName = 'cpu';
  private _intervalId?: number;

  constructor(props: CpuPanelProps) {
    super(props);
    this.state = {
      percentage: null,
    };
    this._loadCpuUsage = this._loadCpuUsage.bind(this);
  }

  componentDidMount() {
    this._loadCpuUsage();
    this._intervalId = window.setInterval(() => {
      this._loadCpuUsage();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

  private _loadCpuUsage() {
    loadCpuUsage().then(percentage => {
      this.setState({ percentage });
    });
  }

  render() {
    return (
      <Panel icon={BsCpu}>
        {this.state.percentage !== null ? `${this.state.percentage}%` : '??%'}
      </Panel>
    );
  }
}

export default CpuPanel;
