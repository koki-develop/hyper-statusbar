import axios from 'axios';

const publicIpApiUrl = 'https://checkip.amazonaws.com/';

export const fetchPublicIp = async (): Promise<string> => {
  const { data } = await axios.get<string>(publicIpApiUrl);
  return data;
};
