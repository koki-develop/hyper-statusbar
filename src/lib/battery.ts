export const getBattery = (): Promise<BatteryManager> => {
  return navigator.getBattery();
};
