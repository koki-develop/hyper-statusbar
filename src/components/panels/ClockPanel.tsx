import { format } from 'date-fns';
import React from 'react';
import { BsClock } from 'react-icons/bs';
import Panel from '.';

export type ClockPanelProps = {
  //
};

export type ClockPanelState = {
  now: Date;
};

class ClockPanel extends React.Component<ClockPanelProps, ClockPanelState> {
  static panelName = 'clock';
  private _intervalId?: number;

  constructor(props: ClockPanelProps) {
    super(props);
    this.state = {
      now: new Date(),
    };
    this.setNow = this.setNow.bind(this);
  }

  setNow() {
    this.setState({ now: new Date() });
  }

  componentDidMount() {
    this._intervalId = window.setInterval(() => {
      this.setNow();
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

  render() {
    return (
      <Panel icon={BsClock}>{format(this.state.now, 'M/d HH:mm:ss')}</Panel>
    );
  }
}

export default ClockPanel;
