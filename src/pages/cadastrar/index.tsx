import { useRouter } from 'next/router';
import useStatus from 'src/lib/hooks/useStatus';
import LoadingTemplate from 'src/templates/Loading/index';
import CadastrarTemplate from 'src/templates/Cadastrar/index';

export default function Cadastrar() {
  const router = useRouter();
  const status = useStatus();

  if (status === 'loading') {
    return <LoadingTemplate />;
  }
  if (status === 'authenticated') {
    router.push('/painel');
    return <LoadingTemplate />;
  }
  if (status === 'unauthenticated') {
    return <CadastrarTemplate />;
  }
}
