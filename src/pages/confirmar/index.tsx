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
import { putAlert } from 'src/reducers/alert/index';
//types
import type VisitData from 'src/types/VisitData';
import useSession from 'src/lib/hooks/useSession';
import useVerification from 'src/lib/hooks/swr/useVerification/index';
import useMassLogout from 'src/lib/hooks/swr/useMassLogout/index';
import logout from 'src/lib/fetchers/session/logout/index';

export default function Confirmar() {
  const status = useStatus();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const visitedPagePath = router.pathname;
  const [visit, setVisit] = useState<VisitData>();
  const session = useSession('required');
  const email = session?.user?.email;
  const isVerified = useVerification(email as string);
  const logoutRequest = useMassLogout(email as string);
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
    if (logoutRequest.ok.id) {
      if (visit?.data?.visit_id != logoutRequest.ok.id) {
        if (logoutRequest.ok.jwt_key != session?.user?.jwt_key) {
          dispatch(
            putAlert({
              content: {
                message: 'Saindo da áera de usuário',
                severity: 'warning',
                duration: 5000,
                show: true,
              },
            }),
          );
          logout({
            redirect: false,
            callbackUrl: '/entrar',
          }).then((result) => {
            router.push(result.url);
            return (
              <LoadingTemplate>
                Desconectando, aguarde...
              </LoadingTemplate>
            );
          });
        }
      }
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
