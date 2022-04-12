import Link from 'next/link';
import Image from 'next/image';
import styles from 'src/templates/Painel/index.module.css';
import LoadingTemplate from 'src/templates/commons/Loading/index';
import { useRouter } from 'next/router';
import useVerification from 'src/lib/hooks/swr/useVerification';
import useStatus from 'src/lib/hooks/useStatus';
import useSession from 'src/lib/hooks/useSession';
import logout from 'src/lib/fetchers/session/logout';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
import { putAlert } from 'src/reducers/alert/index';

export default function Painel() {
  const router = useRouter();
  const session = useSession();
  const dispatch = useAppDispatch();

  async function handleSignOut() {
    dispatch(
      putAlert({
        content: {
          message: 'Saindo da área de usuário...',
          severity: 'warning',
          duration: 3000,
          show: true,
        },
      }),
    );
    const result = await logout({
      redirect: false,
      callbackUrl: '/entrar',
    });
    router.push(result.url);
  }
  const status = useStatus();
  const email = session?.user?.email;
  const isVerified = useVerification(email as string);

  if (status === 'loading') {
    return <LoadingTemplate />;
  }

  if (status === 'authenticated') {
    if (!isVerified.ok) {
      router.push('/confirmar');
      return null;
    }
  }
  return (
    <div className={styles.container}>
      <main>
        <Link href="/">
          <a>
            <Image
              src="/logo-pdt-blue.png"
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
  );
}
