//Dependency imports
import dynamic from 'next/dynamic';
//shared components
import MyHead from 'src/components/MyHead/index';
//hooks
import useStatus from 'src/lib/hooks/useStatus';

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
