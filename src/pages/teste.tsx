/*shared components*/
import MyHead from 'src/components/myhead/index';
/*Pages templates*/
import LoadingTemplate from 'src/templates/loading';
import PagesTesteAuthTemplate from 'src/templates/auth/pagesteste/index';
import PagesTesteUnauthTemplate from 'src/templates/unauth/pagesteste/index';
/*hooks*/
import useStatus from 'src/lib/hooks/usestatus';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAppDispatch } from 'src/lib/hooks/useredux';
/*fetcher*/
import createVisit from 'src/lib/fetchers/visit/create';
/*reducers*/
import { add } from 'src/reducers/visit/index';
/*types*/
import type VisitData from 'src/types/visitdata';

export default function PagesTeste() {
  const status = useStatus();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const visitedPagePath = router.pathname;
  const [_visit, setVisit] = useState<VisitData>({});

  useEffect(() => {
    createVisit(visitedPagePath).then((visitData: VisitData) => {
      dispatch(add(visitData)), setVisit(visitData);
    });
  }, [dispatch, visitedPagePath]);

  return (
    <MyHead title="" description="replaceThis" robots="none">
      {status === 'loading' && (
        <LoadingTemplate>Carregando, aguarde</LoadingTemplate>
      )}
      {status === 'unauthenticated' && (
        <PagesTesteUnauthTemplate />
      )}
      {status === 'authenticated' && <PagesTesteAuthTemplate />}
    </MyHead>
  );
}
