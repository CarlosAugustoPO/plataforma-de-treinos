//shared components
import MyHead from 'src/components/MyHead/index';
//General Pages templates
import LoadingTemplate from 'src/templates/commons/Loading';
//Dynamic Pages templates
import dynamic from 'next/dynamic';
const IndexAuthTemplate = dynamic(
  // () => import('src/templates/unauth/PaginaDeVendas/'),
  () => import('src/templates/unauth/AvaliacaoFisicaLP/'),
  // () => import('src/templates/auth/Painel/'),
  { loading: () => <LoadingTemplate /> },
);
const IndexUnauthTemplate = dynamic(
  // () => import('src/templates/unauth/TurmaFechada'),
  // () => import('src/templates/unauth/PaginaDeVendas/'),
  () => import('src/templates/unauth/AvaliacaoFisicaLP/'),
  // () => import('src/templates/unauth/SocialLogin/'),
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

export default function Index() {
  const status = useStatus();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const visitedPagePath = router.pathname;
  const [_visit, setVisit] = useState<VisitData>();

  useEffect(() => {
    createVisit(visitedPagePath).then((visitResult) => {
      if (visitResult) {
        dispatch(add(visitResult)), setVisit(visitResult);
      }
    });
  }, [dispatch, visitedPagePath]);

  return (
    <MyHead>
      {status === 'loading' && (
        <LoadingTemplate>Carregando, aguarde...</LoadingTemplate>
      )}
      {status === 'unauthenticated' && <IndexUnauthTemplate />}
      {status === 'authenticated' && <IndexAuthTemplate />}
    </MyHead>
  );
}
