import osu from 'node-os-utils';

export const loadCpuUsage = (): Promise<number> => {
  return osu.cpu.usage();
};
