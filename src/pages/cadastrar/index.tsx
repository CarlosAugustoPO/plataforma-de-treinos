import { useRouter } from 'next/router';
import useStatus from 'src/lib/hooks/useStatus';
import LoadingTemplate from 'src/templates/Loading/index';
import type { ReactElement } from 'react';
import Layout from 'src/components/Layout/index';
import CadastrarTemplate from 'src/templates/Cadastrar/index';
import MyHeader from 'src/components/MyHeader';

export default function Cadastrar() {
  const router = useRouter();
  const status = useStatus();

  if (status === 'loading') {
    return (
      <MyHeader>
        <LoadingTemplate />
      </MyHeader>
    );
  }
  if (status === 'authenticated') {
    router.push('/painel');
    return (
      <MyHeader>
        <LoadingTemplate />
      </MyHeader>
    );
  }
  if (status === 'unauthenticated') {
    return (
      <MyHeader>
        <CadastrarTemplate />
      </MyHeader>
    );
  }
}

Cadastrar.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
