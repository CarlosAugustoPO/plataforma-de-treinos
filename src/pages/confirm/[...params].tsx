import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import verifyCode from 'src/lib/chains/verifyCode';
import LoadingTemplate from 'src/templates/Loading';

export default function Confirm() {
  const router = useRouter();
  const [confirmStatus, setConfirmStatus] =
    useState('Carregando...');

  const params = router.query.params;
  useEffect(() => {
    if (!params) {
      return;
    }
    const email = params[0];
    const verificationCode = params[1];
    const hashFragment = params[2];
    const magicToken = params[3];
    let messageTimeout: any;

    verifyCode({
      verificationCode,
      hashFragment,
      email,
      magicToken,
    }).then((result) => {
      if (result?.error) {
        console.error(result.error);
        setConfirmStatus(result.error);
        messageTimeout = setTimeout(() => {
          router.push('/confirm');
        }, 1500);
        return;
      }
      setConfirmStatus('E-mail validado com sucesso');
      clearTimeout(messageTimeout);
      messageTimeout = setTimeout(() => {
        router.push('/painel');
      }, 1500);
      return () => {
        clearTimeout(messageTimeout);
      };
    });
  }, [params, router]);

  return <LoadingTemplate>{confirmStatus}</LoadingTemplate>;
}
