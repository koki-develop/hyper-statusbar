import React from "react";
import {
  MdBatteryUnknown,
  MdBattery20,
  MdBattery30,
  MdBattery50,
  MdBattery60,
  MdBattery80,
  MdBattery90,
  MdBatteryFull,
} from "react-icons/md";
import { IconType } from "react-icons";

export type BatteryPanelProps = {
  //
};

export type BatteryPanelState = {
  icon: IconType;
  percentageText: string;
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
      icon: MdBatteryUnknown,
      percentageText: "??",
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
    const percentage = Math.trunc(battery.level * 100);
    const icon = (() => {
      switch (true) {
        case percentage > 100:
          return MdBatteryFull;
        case percentage > 80:
          return MdBattery90;
        case percentage > 70:
          return MdBattery80;
        case percentage > 50:
          return MdBattery60;
        case percentage > 40:
          return MdBattery50;
        case percentage > 20:
          return MdBattery30;
        default:
          return MdBattery20;
      }
    })();

    this.setState({
      icon,
      percentageText: percentage.toString(),
    });
  }

  render() {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          padding: "0px 16px",
        }}
      >
        {React.createElement(this.state.icon)} {this.state.percentageText}%
      </div>
    );
  }
}

export default BatteryPanel;
