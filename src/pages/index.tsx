import createVisit from 'src/lib/fetchers/visit/create';
//Dependency imports
import dynamic from 'next/dynamic';
//shared components
import MyHead from 'src/components/MyHead/index';
//hooks
import useStatus from 'src/lib/hooks/useStatus';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoadingTemplate from 'src/templates/Loading';
import IndexTemplate from 'src/templates/Index';

export default function Index() {
  const status = useStatus();
  const router = useRouter();
  const visitedPagePath = router.pathname;

  useEffect(() => {
    createVisit(visitedPagePath).then((visit) =>
      console.log('Visit id: ', visit.data?.visit_id),
    );
  }, [visitedPagePath]);

  if (status === 'loading') {
    return (
      <LoadingTemplate>Carregando, aguarde</LoadingTemplate>
    );
  }

  if (
    status === 'unauthenticated' ||
    status === 'authenticated'
  ) {
    return (
      <MyHead>
        <IndexTemplate status={status} />
      </MyHead>
    );
  }
}
