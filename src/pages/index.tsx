//shared components
import MyHead from 'src/components/MyHead/index';
//Pages templates
import LoadingTemplate from 'src/templates/Loading';
import IndexAuthTemplate from 'src/templates/Index';
import IndexUnauthTemplate from 'src/templates/Index';
//hooks
import useStatus from 'src/lib/hooks/useStatus';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
//fetcher
import createVisit from 'src/lib/fetchers/visit/create';
//reducers
import { add } from 'src/reducers/visit/index';
//types
import type VisitData from 'src/types/VisitData';

export default function Index() {
  const status = useStatus();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const visitedPagePath = router.pathname;
  const [visit, setVisit] = useState<VisitData>({});

  useEffect(() => {
    createVisit(visitedPagePath).then((visitData) => {
      dispatch(add(visitData)), setVisit(visitData);
    });
  }, [dispatch, visitedPagePath]);

  return (
    <MyHead>
      {status === 'loading' && (
        <LoadingTemplate>Carregando, aguarde</LoadingTemplate>
      )}
      {status === 'unauthenticated' && (
        <IndexAuthTemplate status={status} visit={visit} />
      )}
      {status === 'authenticated' && (
        <IndexUnauthTemplate status={status} visit={visit} />
      )}
    </MyHead>
  );
}
