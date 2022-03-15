//fetchers
import logout from 'src/lib/fetchers/session/logout';
//components
import Link from 'next/link';
import Image from 'next/image';
//style
import styles from 'src/templates/Confirm/index.module.css';
import verifyCode from 'src/lib/chains/verifyCode';
//hooks
import { useEffect, useState } from 'react';
//tyopes
import type Session from 'src/types/next-auth.d';

type Props = {
  parentSession: Session;
};

export default function Confirm({ parentSession }: Props) {
  const [confirmResult, setConfirmResult] = useState('');
  const [session, setSession] = useState<Session | undefined>(
    parentSession,
  );

  useEffect(() => {
    return () => {
      setConfirmResult('');
      setSession(undefined);
    };
  }, []);

  async function handleConfirm(submitEvent: any) {
    setConfirmResult('');
    submitEvent.preventDefault();

    const verificationCode = submitEvent.target.verificationCode
      .value as string;
    const email = session?.user?.email as string;
    const hashFragment = session?.user
      ?.fragment_hash_password as string;

    const verifyCodeResult = await verifyCode({
      verificationCode,
      hashFragment,
      email,
    });
    setConfirmResult(verifyCodeResult.message);
  }

  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <Image
            src="/logo-pdt-light.png"
            alt="pdt Logo"
            width={75}
            height={75}
          />
        </a>
      </Link>
      <main>
        <h1>Confirme sua conta na Plataforma de Treinos</h1>
        <p>
          Digite o número de 5 dígitos enviado ao email{' '}
          {session?.user?.email}
        </p>
        <form onSubmit={handleConfirm}>
          <div>
            <label htmlFor="verificationCode">
              Código de verificação:
            </label>
            <input
              type="text"
              id="verificationCode"
              name="verificationCode"
            />
          </div>
          <div className={styles.buttonBox}>
            <button type="submit">Enviar</button>
          </div>
        </form>
        {confirmResult}
        <div className={styles.grid}>
          <button type="button" onClick={() => logout()}>
            sair de {session?.user?.email}
          </button>
        </div>
      </main>
    </div>
  );
}
