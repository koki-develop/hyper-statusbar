import React from 'react';
import { IconType } from 'react-icons';
import {
  MdBatteryUnknown,
  MdBattery20,
  MdBattery30,
  MdBattery50,
  MdBattery60,
  MdBattery80,
  MdBattery90,
  MdBatteryFull,
  MdBatteryCharging20,
  MdBatteryCharging30,
  MdBatteryCharging50,
  MdBatteryCharging60,
  MdBatteryCharging80,
  MdBatteryCharging90,
  MdBatteryChargingFull,
} from 'react-icons/md';
import Panel from '.';

type BatteryIconLevel = 20 | 30 | 50 | 60 | 80 | 90 | 100;

const getBatteryIcon = (
  level: BatteryIconLevel,
  charging: boolean,
): IconType => {
  const iconSet: [IconType, IconType] = (() => {
    switch (level) {
      case 100:
        return [MdBatteryFull, MdBatteryChargingFull];
      case 90:
        return [MdBattery90, MdBatteryCharging90];
      case 80:
        return [MdBattery80, MdBatteryCharging80];
      case 60:
        return [MdBattery60, MdBatteryCharging60];
      case 50:
        return [MdBattery50, MdBatteryCharging50];
      case 30:
        return [MdBattery30, MdBatteryCharging30];
      case 20:
        return [MdBattery20, MdBatteryCharging20];
    }
  })();

  return iconSet[Number(charging)];
};

export type BatteryPanelProps = {
  //
};

export type BatteryPanelState = {
  icon: IconType;
  percentageText: string;
};

const batteryEvents: (keyof BatteryManagerEventTargetEventMap)[] = [
  'chargingchange',
  'chargingtimechange',
  'dischargingtimechange',
  'levelchange',
];

class BatteryPanel extends React.Component<
  BatteryPanelProps,
  BatteryPanelState
> {
  static panelName = 'battery';

  constructor(props: BatteryPanelProps) {
    super(props);
    this.state = {
      icon: MdBatteryUnknown,
      percentageText: '??',
    };

    this._handleBatteryEvent = this._handleBatteryEvent.bind(this);
  }

  componentDidMount() {
    navigator.getBattery().then(battery => {
      this._setBatteryState(battery);
      for (const event of batteryEvents) {
        battery.addEventListener(event, this._handleBatteryEvent);
      }
    });
  }

  componentWillUnmount() {
    navigator.getBattery().then(battery => {
      for (const event of batteryEvents) {
        battery.removeEventListener(event, this._handleBatteryEvent);
      }
    });
  }

  private _handleBatteryEvent(event: Event) {
    const battery = event.target as BatteryManager;
    this._setBatteryState(battery);
  }

  private _setBatteryState(battery: BatteryManager) {
    const percentage = Math.trunc(battery.level * 100);
    const batteryIconLevel: BatteryIconLevel = (() => {
      switch (true) {
        case percentage > 90:
          return 100;
        case percentage > 80:
          return 90;
        case percentage > 70:
          return 80;
        case percentage > 50:
          return 60;
        case percentage > 40:
          return 50;
        case percentage > 20:
          return 30;
        default:
          return 20;
      }
    })();

    this.setState({
      icon: getBatteryIcon(batteryIconLevel, battery.charging),
      percentageText: percentage.toString(),
    });
  }

  render() {
    return <Panel icon={this.state.icon}>{this.state.percentageText}%</Panel>;
  }
}

export default BatteryPanel;
