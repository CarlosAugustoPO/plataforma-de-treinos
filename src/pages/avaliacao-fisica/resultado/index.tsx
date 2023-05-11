import MyHead from 'src/components/MyHead/index';
import LoadingTemplate from 'src/templates/commons/Loading';
import dynamic from 'next/dynamic';
const PageAuthTemplate = dynamic(
  () =>
    import(
      'src/templates/unauth/AvaliacaoFisicaResultado/index.jsx'
    ),
  { loading: () => <LoadingTemplate /> },
);
const PageUnauthTemplate = dynamic(
  () =>
    import(
      'src/templates/unauth/AvaliacaoFisicaResultado/index.jsx'
    ),
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
import { setBackButton } from 'src/reducers/backButton/index';
//types
import type VisitData from 'src/types/VisitData';

export default function Page() {
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

  useEffect(() => {
    dispatch(
      setBackButton(
        '/avaliacao-fisica/presencial/treinador-carlos-augusto',
      ),
    );
  }, [dispatch]);

  return (
    <MyHead>
      {status === 'loading' && (
        <LoadingTemplate>Carregando, aguarde...</LoadingTemplate>
      )}
      {status === 'unauthenticated' && <PageUnauthTemplate />}
      {status === 'authenticated' && <PageAuthTemplate />}
    </MyHead>
  );
}
