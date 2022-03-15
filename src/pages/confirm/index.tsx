import useRouter from 'src/lib/hooks/useRouter';
import useSession from 'src/lib/hooks/useSession';
import useStatus from 'src/lib/hooks/useStatus';
import useVerification from 'src/lib/hooks/swr/useVerification';
import LoadingTemplate from 'src/templates/Loading';
import type { ReactElement } from 'react';
import ConfirmTemplate from 'src/templates/Confirm/index';

export default function Confirm() {
  const router = useRouter();
  const status = useStatus();
  const parentSession = useSession('required');
  const email = parentSession?.user?.email;
  const isVerified = useVerification(email as string);

  if (status === 'loading') {
    return (
      <LoadingTemplate>Carregando, aguarde</LoadingTemplate>
    );
  }

  if (isVerified.ok) {
    router.push('/painel');
    return null;
  }

  return <ConfirmTemplate parentSession={parentSession} />;
}
