import Text from 'src/components/Text/index';
/*shared components*/
import MyHead from 'src/components/MyHead/index';
/*Pages templates*/
import LoadingTemplate from 'src/templates/Loading';
import PagesTesteAuthTemplate from 'src/templates/auth/PagesTeste/index';
import PagesTesteUnauthTemplate from 'src/templates/unauth/PagesTeste/index';
/*hooks*/
import useStatus from 'src/lib/hooks/useStatus';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
/*fetcher*/
import createVisit from 'src/lib/fetchers/visit/create';
/*reducers*/
import { add } from 'src/reducers/visit/index';
/*types*/
import type VisitData from 'src/types/VisitData';

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
    <MyHead description="replaceThis" robots="none">
      {status === 'loading' && (
        <LoadingTemplate>Carregando, aguarde</LoadingTemplate>
      )}
      {status === 'unauthenticated' && (
        <Text component="p">teste</Text>
      )}
    </MyHead>
  );
}
