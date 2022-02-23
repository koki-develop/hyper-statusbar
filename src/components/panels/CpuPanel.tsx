import osu from 'node-os-utils';
import React from 'react';
import { BsCpu } from 'react-icons/bs';
import Panel from '.';

export type CpuPanelProps = {
  //
};

export type CpuPanelState = {
  percentageText: string;
};

class CpuPanel extends React.Component<CpuPanelProps, CpuPanelState> {
  static panelName = 'cpu';
  private _intervalId?: number;

  constructor(props: CpuPanelProps) {
    super(props);
    this.state = {
      percentageText: '??',
    };
  }

  componentDidMount() {
    this._intervalId = window.setInterval(() => {
      osu.cpu
        .usage()
        .then(percentage => {
          this.setState({ percentageText: Math.trunc(percentage).toString() });
        })
        .catch(err => {
          console.error(err);
          this.setState({ percentageText: '(failed)' });
        });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

  render() {
    return <Panel icon={BsCpu}>{this.state.percentageText}%</Panel>;
  }
}

export default CpuPanel;
