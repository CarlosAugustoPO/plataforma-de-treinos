import useSWR from 'swr';

async function fetcher(url: string) {
  return fetch(url).then((res) => res.json());
}

export default function useMassLogout(email: string): any {
  const { data, error } = useSWR(
    `/api/users/get/swr/jwt-token-field/${email}`,
    fetcher,
    {
      refreshInterval: 1000,
    },
  );
  return {
    ok: {
      jwt_key: data?.ok?.jwt_key,
      id: data?.ok?.logout_request_id,
    },
    loading: !error && !data,
    error: error,
  };
}
