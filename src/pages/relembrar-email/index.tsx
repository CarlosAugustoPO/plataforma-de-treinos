//shared components
import MyHead from 'src/components/MyHead/index';
//General Pages templates
import LoadingTemplate from 'src/templates/commons/Loading';
//Dynamic Pages templates
import dynamic from 'next/dynamic';
const RecuperarContaUnauthTemplate = dynamic(
  () => import('src/templates/unauth/RelembrarEmail/index'),
  { loading: () => <LoadingTemplate /> },
);
//hooks
import useStatus from 'src/lib/hooks/useStatus';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
//reducers
import { add } from 'src/reducers/visit/index';
//fetcher
import createVisit from 'src/lib/fetchers/visits/create/index';
//types
import type VisitData from 'src/types/VisitData';

export default function RecuperarConta() {
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

  if (status === 'authenticated') {
    router.push('/painel');
    return (
      <LoadingTemplate>Carregando, aguarde...</LoadingTemplate>
    );
  }

  return (
    <MyHead>
      {status === 'loading' && (
        <LoadingTemplate>Carregando, aguarde...</LoadingTemplate>
      )}
      {status === 'unauthenticated' && (
        <RecuperarContaUnauthTemplate />
      )}
    </MyHead>
  );
}
