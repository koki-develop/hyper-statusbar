import axios from 'axios';

const publicIpApiUrl = 'https://checkip.dev';

type CheckIPResponse = {
  source_ip: string;
}

export const fetchPublicIp = async (): Promise<string> => {
  const { data } = await axios.get<CheckIPResponse>(publicIpApiUrl);
  return data.source_ip;
};
