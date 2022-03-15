import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import verifyCode from 'src/lib/chains/verifyCode';
import LoadingTemplate from 'src/templates/Loading';

export default function Confirm() {
  const router = useRouter();
  const getUrl = router.query;
  const params = getUrl.params || [];
  const email = params[0];
  const verificationCode = params[1];
  const hashFragment = params[2];
  const magicToken = params[3];
  const [confirmStatus, setConfirmStatus] = useState(
    'Aguarde, validando e-mail',
  );
  useEffect(() => {
    verifyCode({
      verificationCode,
      hashFragment,
      email,
      magicToken,
    }).then((result) => {
      if (
        !verificationCode ||
        !email ||
        !magicToken ||
        !hashFragment
      ) {
        return;
      }
      if (result.error) {
        setConfirmStatus(
          'Falha em utilizar link de validação de e-mail, redirecionando para validação manual',
        );
        router.push('/painel');
        return;
      }
      setConfirmStatus('E-mail validado com sucesso');
      router.push('/painel');
    });
  }, [
    verificationCode,
    hashFragment,
    email,
    magicToken,
    router,
  ]);

  return <LoadingTemplate>{confirmStatus}</LoadingTemplate>;
}
