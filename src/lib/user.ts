import os from 'os';

export type User = {
  name: string;
  hostname: string;
};

export const loadUser = (): User => {
  return {
    name: process.env.USER,
    hostname: os.hostname(),
  };
};
