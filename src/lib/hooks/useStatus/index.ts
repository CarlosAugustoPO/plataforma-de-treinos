import { useSession } from 'next-auth/react';

export default function useStatus() {
  const { status } = useSession();
  return status;
}
