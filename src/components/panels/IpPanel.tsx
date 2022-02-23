import publicIp from 'public-ip';
import React from 'react';
import { MdWifiTethering, MdWifiTetheringOff } from 'react-icons/md';
import Panel from '.';

export type IpPanelProps = {
  //
};

export type IpPanelState = {
  ip: string;
  online: boolean;
};

class IpPanel extends React.Component<IpPanelProps, IpPanelState> {
  static panelName = 'ip';
  private _intervalId?: number;

  constructor(props: IpPanelProps) {
    super(props);
    this.state = {
      ip: '?.?.?.?',
      online: navigator.onLine,
    };
  }

  componentDidMount() {
    this._intervalId = window.setInterval(() => {
      const online = navigator.onLine;
      if (!online) {
        this.setState({ ip: '(offline)', online });
        return;
      }

      publicIp
        .v4()
        .then(ip => {
          this.setState({ ip, online });
        })
        .catch(err => {
          console.error(err);
          this.setState({ ip: '(failed)', online });
        });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

  render() {
    return (
      <Panel icon={this.state.online ? MdWifiTethering : MdWifiTetheringOff}>
        {this.state.ip}
      </Panel>
    );
  }
}

export default IpPanel;
