import axios from 'axios';
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
    this.fetchPublicIp = this.fetchPublicIp.bind(this);
  }

  fetchPublicIp() {
    const online = navigator.onLine;
    if (!online) {
      this.setState({ ip: '(offline)', online });
      return;
    }

    axios
      .get('https://checkip.amazonaws.com/')
      .then(response => {
        this.setState({ ip: response.data, online });
      })
      .catch(err => {
        console.error(err);
        this.setState({ ip: '(failed)', online });
      });
  }

  componentDidMount() {
    this.fetchPublicIp();
    this._intervalId = window.setInterval(() => {
      this.fetchPublicIp();
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
