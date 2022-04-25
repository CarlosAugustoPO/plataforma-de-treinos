import { useState, useEffect } from 'react';
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
import useMassLogout from 'src/lib/hooks/swr/useMassLogout/index';
import createVisit from 'src/lib/fetchers/visits/create/index';
//reducers
import { add } from 'src/reducers/visit/index';
//types
import type VisitData from 'src/types/VisitData';

export default function Painel() {
  const router = useRouter();
  const session = useSession();
  const dispatch = useAppDispatch();
  const visitedPagePath = router.pathname;
  const [visit, setVisit] = useState<VisitData>();

  useEffect(() => {
    createVisit(visitedPagePath).then((visitResult) => {
      if (visitResult) {
        dispatch(add(visitResult)), setVisit(visitResult);
      }
    });
  }, [dispatch, visitedPagePath]);

  async function handleSignOut() {
    dispatch(
      putAlert({
        content: {
          message: 'Saindo da áera de usuário',
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
  const logoutRequest = useMassLogout(email as string);

  if (status === 'loading') {
    return <LoadingTemplate />;
  }

  if (status === 'authenticated') {
    if (!isVerified.ok) {
      router.push('/confirmar');
      return null;
    }
    if (logoutRequest.ok.id) {
      if (visit?.data?.visit_id != logoutRequest.ok.id) {
        if (logoutRequest.ok.jwt_key != session?.user?.jwt_key) {
          dispatch(
            putAlert({
              content: {
                message: 'Saindo da áera de usuário',
                severity: 'warning',
                duration: 5000,
                show: true,
              },
            }),
          );
          logout({
            redirect: false,
            callbackUrl: '/entrar',
          }).then((result) => {
            router.push(result.url);
            return (
              <LoadingTemplate>
                Desconectando, aguarde...
              </LoadingTemplate>
            );
          });
        }
      }
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
