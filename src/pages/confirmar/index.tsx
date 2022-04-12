//shared components
import MyHead from 'src/components/MyHead/index';
//General Pages templates
import LoadingTemplate from 'src/templates/commons/Loading/index';
//Dynamic Pages templates
import dynamic from 'next/dynamic';
const ConfirmAuthTemplate = dynamic(
  () => import('src/templates/auth/Confirmar'),
  { loading: () => <LoadingTemplate /> },
);
//hooks
import useStatus from 'src/lib/hooks/useStatus';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
//fetcher
import createVisit from 'src/lib/fetchers/visits/create/index';
//reducers
import { add } from 'src/reducers/visit/index';
//types
import type VisitData from 'src/types/VisitData';
import useSession from 'src/lib/hooks/useSession';
import useVerification from 'src/lib/hooks/swr/useVerification/index';

export default function Confirmar() {
  const status = useStatus();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const visitedPagePath = router.pathname;
  const [_visit, setVisit] = useState<VisitData>();
  const session = useSession('required');
  const email = session?.user?.email;
  const isVerified = useVerification(email as string);

  useEffect(() => {
    createVisit(visitedPagePath).then((visitResult) => {
      if (visitResult) {
        dispatch(add(visitResult)), setVisit(visitResult);
      }
    });
  }, [dispatch, visitedPagePath]);

  if (status === 'authenticated') {
    if (isVerified.ok) {
      router.push('/painel');
      return (
        <LoadingTemplate>Carregando, aguarde...</LoadingTemplate>
      );
    }
  }

  if (status === 'unauthenticated') {
    router.push('/entrar');
    return (
      <LoadingTemplate>Carregando, aguarde...</LoadingTemplate>
    );
  }

  return (
    <MyHead>
      {status === 'loading' && (
        <LoadingTemplate>Carregando, aguarde...</LoadingTemplate>
      )}
      {status === 'authenticated' && (
        <ConfirmAuthTemplate session={session} />
      )}
    </MyHead>
  );
}
