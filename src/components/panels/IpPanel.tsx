import React from 'react';
import { MdWifiTethering, MdWifiTetheringOff } from 'react-icons/md';
import { fetchPublicIp } from '@/lib/ip';
import Panel from '.';

export type IpPanelProps = {
  //
};

export type IpPanelState = {
  ip: string | null;
  online: boolean;
};

class IpPanel extends React.Component<IpPanelProps, IpPanelState> {
  static panelName = 'ip';
  private _intervalId?: number;

  constructor(props: IpPanelProps) {
    super(props);
    this.state = {
      ip: null,
      online: navigator.onLine,
    };
    this._fetchPublicIp = this._fetchPublicIp.bind(this);
  }

  componentDidMount() {
    this._fetchPublicIp();
    this._intervalId = window.setInterval(() => {
      this._fetchPublicIp();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

  private _fetchPublicIp() {
    const online = navigator.onLine;
    if (!online) {
      this.setState({ ip: '(offline)', online });
      return;
    }

    fetchPublicIp().then(ip => {
      this.setState({ ip, online });
    });
  }

  render() {
    return (
      <Panel icon={this.state.online ? MdWifiTethering : MdWifiTetheringOff}>
        {this.state.ip ?? '?.?.?.?'}
      </Panel>
    );
  }
}

export default IpPanel;
