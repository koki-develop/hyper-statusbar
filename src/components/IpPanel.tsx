import React from "react";
import { MdWifiTethering, MdWifiTetheringOff } from "react-icons/md";
import publicIp from "public-ip";
import Panel from "./Panel";

export type IpPanelProps = {
  //
};

export type IpPanelState = {
  ip: string | null;
  online: boolean;
};

class IpPanel extends React.Component<IpPanelProps, IpPanelState> {
  private _intervalId?: number;

  constructor(props: IpPanelProps) {
    super(props);
    this.state = {
      ip: null,
      online: navigator.onLine,
    };
  }

  componentDidMount() {
    this._intervalId = window.setInterval(() => {
      const online = navigator.onLine;
      if (!online) {
        this.setState({ ip: null, online });
        return;
      }

      publicIp
        .v4()
        .then((ip) => {
          this.setState({ ip, online: navigator.onLine });
        })
        .catch((err) => {
          console.error(err);
          this.setState({ ip: null, online: navigator.onLine });
        });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

  render() {
    return (
      <Panel icon={this.state.online ? MdWifiTethering : MdWifiTetheringOff}>
        {this.state.online ? this.state.ip ?? "?.?.?.?" : "(offline)"}
      </Panel>
    );
  }
}

export default IpPanel;
