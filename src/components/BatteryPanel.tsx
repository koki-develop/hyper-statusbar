import React from "react";

export type BatteryPanelProps = {
  //
};

export type BatteryPanelState = {
  percentage: number | null;
};

const batteryEvents: (keyof BatteryManagerEventTargetEventMap)[] = [
  "chargingchange",
  "chargingtimechange",
  "dischargingtimechange",
  "levelchange",
];

class BatteryPanel extends React.Component<
  BatteryPanelProps,
  BatteryPanelState
> {
  constructor(props: BatteryPanelProps) {
    super(props);
    this.state = {
      percentage: null,
    };
  }

  componentDidMount() {
    navigator.getBattery().then((battery) => {
      this.setBatteryState(battery);
      for (const event of batteryEvents) {
        battery.addEventListener(event, this.handleBatteryEvent);
      }
    });
  }

  componentWillUnmount() {
    navigator.getBattery().then((battery) => {
      for (const event of batteryEvents) {
        battery.removeEventListener(event, this.handleBatteryEvent);
      }
    });
  }

  handleBatteryEvent(event: Event) {
    const battery = event.target as BatteryManager;
    this.setBatteryState(battery);
  }

  setBatteryState(battery: BatteryManager) {
    this.setState({
      percentage: Math.trunc(battery.level * 100),
    });
  }

  render() {
    return <h1>percentage: {this.state.percentage}</h1>;
  }
}

export default BatteryPanel;
