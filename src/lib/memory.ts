import osu from 'node-os-utils';

export type Memory = {
  totalMb: number;
  usedMb: number;
};

export const loadMemory = async (): Promise<Memory> => {
  const memory = await osu.mem.used();
  return {
    totalMb: memory.totalMemMb,
    usedMb: memory.usedMemMb,
  };
};
