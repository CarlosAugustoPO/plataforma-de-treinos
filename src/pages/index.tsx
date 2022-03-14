//Dependency imports
import dynamic from 'next/dynamic';
//shared components
import Layout from 'src/components/Layout/index';
import MyHeader from 'src/components/MyHeader/index';
//hooks
import useStatus from 'src/lib/hooks/useStatus';
//types
import type { ReactElement } from 'react';

//templates
const LoadingTemplate = dynamic(
  () => import('src/templates/Loading/index'),
  {
    loading: () => (
      <LoadingTemplate>Carregando, aguarde</LoadingTemplate>
    ),
  },
);

const IndexTemplate = dynamic(
  () => import('src/templates/Index/index'),
  {
    loading: () => (
      <LoadingTemplate>Carregando, aguarde</LoadingTemplate>
    ),
  },
);

export default function Index() {
  const status = useStatus();
  if (status === 'loading') {
    return (
      <MyHeader>
        <LoadingTemplate>Carregando, aguarde</LoadingTemplate>
      </MyHeader>
    );
  }

  if (
    status === 'unauthenticated' ||
    status === 'authenticated'
  ) {
    return (
      <Layout>
        <MyHeader>
          <IndexTemplate status={status} />
        </MyHeader>
      </Layout>
    );
  }
}
