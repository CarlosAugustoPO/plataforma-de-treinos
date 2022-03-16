import { GetServerSideProps } from 'next';
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

export async function getServerSideProps(context: any) {
  const req = context.req;
  const visitor = {
    deployUrl: req?.headers['x-vercel-deployment-url'],
    deployFriendlyUrl: req?.headers['host'],
    visited_url:
      process.env.NEXT_PUBLIC_URL + context?.resolvedUrl,
    user_agent: req.headers['user-agent'],
    remoteAdress: req?.connection.remoteAddress,
    realIp: req?.headers['x-real-ip'],
    forwarded: req?.headers['x-forwarded-for'],
    forwardedVercel: req?.headers['x-vercel-forwarded-for'],
    ipCountry: req?.headers['x-vercel-ip-country'],
    ipCountryRegion: req?.headers['x-vercel-ip-country-region'],
    vercelId: req?.headers['x-vercel-id'],
    ipCity: req?.headers['x-vercel-ip-city'],
  };
  console.log(visitor);

  return { props: { message: 'true' } };
}
