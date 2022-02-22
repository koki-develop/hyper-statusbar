interface Navigator {
  getBattery(): Promise<BatteryManager>;
}

interface BatteryManager extends BatteryManagerEventTarget {
  readonly charging: boolean;
  readonly chargingTime: number;
  readonly dischargingTime: number;
  readonly level: number;
}

interface BatteryManagerEventTargetEventMap {
  chargingchange: Event;
  chargingtimechange: Event;
  dischargingtimechange: Event;
  levelchange: Event;
}

interface BatteryManagerEventTarget extends EventTarget {
  onchargingchange: (this: BatteryManager, ev: Event) => void;
  onlevelchange: (this: BatteryManager, ev: Event) => void;
  onchargingtimechange: (this: BatteryManager, ev: Event) => void;
  ondischargingtimechange: (this: BatteryManager, ev: Event) => void;
  addEventListener<K extends keyof BatteryManagerEventTargetEventMap>(
    type: K,
    listener: (
      this: BatteryManager,
      ev: BatteryManagerEventTargetEventMap[K],
    ) => void,
    useCapture?: boolean,
  ): void;
}
