import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useAppSWR = (api: string) => useSWR(api, fetcher);
