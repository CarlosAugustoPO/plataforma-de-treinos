import useSWR from 'swr';

async function fetcher(url: string) {
  return fetch(url).then((res) => res.json());
}

export default function useVerification(email: string): any {
  const { data, error } = useSWR(
    `/api/swr/is-verified/${email}`,
    fetcher,
    {
      refreshInterval: 1000,
    },
  );
  return {
    ok: data?.ok,
    loading: !error && !data,
    error: error,
  };
}
