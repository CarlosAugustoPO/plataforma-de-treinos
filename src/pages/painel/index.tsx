import Link from 'next/link';
import Layout from 'src/components/Layout/index';
import Image from 'next/image';
import styles from 'src/templates/Painel/index.module.css';
import Head from 'next/head';
import LoadingTemplate from 'src/templates/Loading/index';
import { useRouter } from 'next/router';
import useVerification from 'src/lib/hooks/swr/useVerification';
import useStatus from 'src/lib/hooks/useStatus';
import useSession from 'src/lib/hooks/useSession';
import logout from 'src/lib/fetchers/session/logout';

export default function Painel() {
  const router = useRouter();
  const session = useSession();
  function handleSignOut() {
    logout();
    router.push('/');
  }
  const status = useStatus();
  const email = session?.user?.email;
  const isVerified = useVerification(email as string);

  if (status === 'loading') {
    return <LoadingTemplate />;
  }

  if (!isVerified.ok) {
    router.push('/confirm');
    return null;
  }

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Painel da Plataforma de Treinos</title>
          <link rel="icon" href="/logo-pdt.png" />
        </Head>
        <main>
          <Link href="/">
            <a>
              <Image
                src="/logo-pdt-light.png"
                alt="Vercel Logo"
                width={75}
                height={75}
              />
            </a>
          </Link>
          <h1>Painel da Plataforma de treinos</h1>
          <h2>Site em construção</h2>
          <h3>Seja bem vindo {session!.user!.fname}</h3>
          <button type="button" onClick={handleSignOut}>
            sair de {session!.user!.email}
          </button>
        </main>
      </div>
    </Layout>
  );
}
