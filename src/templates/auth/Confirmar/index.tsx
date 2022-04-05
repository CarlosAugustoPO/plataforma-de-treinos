import updateMagicToken from 'src/lib/fetchers/magic-links/update/magicTokenFields/index';
// import updateVerificationCode from 'src/lib/fetchers/users/update/verificationCodeField/index';
import { sendVerificationMail } from 'src/lib/chains/sendVerificationMail/index';
import TimerTextButton from 'src/components/TimerTextButton/index';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Form from 'src/components/Form/index';
import TextButton from 'src/components/TextButton/index';
import VerificationCodeField from 'src/components/Form/VerificationCodeField/index';
import SendButton from 'src/components/Form/SendButton/index';
import Title from 'src/components/Title';
import Text from 'src/components/Text';
import MyCard from 'src/components/MyCard/index';
import ConfirmMailIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import logout from 'src/lib/fetchers/session/logout';
import verifyCode from 'src/lib/chains/verifyCode';
import type Session from 'src/types/Session';

export default function ConfirmarAuthTemplate(props: {
  session: Session;
}) {
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    return () => {
      setSubmitting(false); // This worked for me
    };
  }, []);

  const [generalError, setGeneralError] = useState<
    undefined | string
  >(undefined);
  const [okResult, setOkResult] = useState<undefined | string>(
    undefined,
  );
  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  function handleErrors() {
    setGeneralError('');
    clearErrors();
  }

  async function handleConfirm(data: any) {
    setSubmitting(true);
    const verificationCode = data.verificationCode;
    const email = props.session?.user?.email as string;
    const hashFragment = props.session?.user
      ?.fragment_hash_password as string;

    const verifyCodeResult = await verifyCode({
      verificationCode,
      hashFragment,
      email,
    });
    if (verifyCodeResult.error) {
      setGeneralError(verifyCodeResult.error.toString());
      setSubmitting(false); //cause non-op error, cause try change when as unmouunt cause redirect, put this on useeFfect
      return;
    }

    setOkResult(verifyCodeResult.ok);
    setSubmitting(false);
    return;
  }

  async function handleResendVerificationEmail() {
    handleErrors();
    const email = props.session?.user?.email as string;

    // const updateVerificationCodeResult =
    //   await updateVerificationCode(email);
    // if (updateVerificationCodeResult.error) {
    //   setGeneralError(
    //     'Falha em gerar novo código de verificação',
    //   );
    //   return;
    // }

    const updateMagicTokenResult = await updateMagicToken(email);
    if (updateMagicTokenResult.error) {
      setGeneralError('Falha em gerar novo link mágico');
      return;
    }

    // const updateMagicTokenResult;
    const sendVerificationMailResult =
      await sendVerificationMail(email);
    if (sendVerificationMailResult.error) {
      setGeneralError('Falha em reenviar código');
      return;
    }
    setOkResult('Código enviado com sucesso');
    return;
  }

  return (
    <MyCard>
      <ConfirmMailIcon
        sx={{ color: 'mainIcon.main', fontSize: 60 }}
      />
      <Title gutterBottom>
        Confirme sua conta na Plataforma de Treinos
      </Title>
      <Text>
        Digite o número de 5 dígitos enviado ao email{' '}
        {props.session?.user?.email}
      </Text>
      <Form
        handleSubmit={handleSubmit}
        handleAction={handleConfirm}
      >
        <VerificationCodeField
          errors={errors.verificationCode?.type}
          clearErrors={clearErrors}
          setOkResult={setOkResult}
          setGeneralError={setGeneralError}
          register={register}
        />
        {generalError && (
          <Text
            color="error.main"
            align="left"
            width="100%"
            variant="subtitle2"
            fontSize="80%"
          >
            {generalError}
          </Text>
        )}
        {okResult && (
          <Text
            color="success.main"
            align="left"
            width="100%"
            variant="subtitle2"
            fontSize="80%"
          >
            {okResult}
          </Text>
        )}
        <SendButton
          sx={{ marginTop: '2%' }}
          enviar="Verificar"
          enviando="Verificando"
          submitting={submitting}
          onClick={handleErrors}
        />
      </Form>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item xs={12}>
          <TimerTextButton
            onClick={handleResendVerificationEmail}
            cta={`Reenviar email de confirmação`}
            initialTime={45000}
          />
        </Grid>
        <Grid item xs={12}>
          <TextButton
            linkColor="pinkLinkInt"
            id="logoutButton"
            sx={{ fontSize: '90%' }}
            onClick={() =>
              logout({
                redirect: false,
                callbackUrl: '/entrar',
              }).then((result) => router.push(result.url))
            }
            cta={`Sair de ${props.session?.user?.email}`}
            href="#logoutButton"
          />
        </Grid>
      </Grid>
    </MyCard>
  );
}

// <TimerButton
//   onClick={resendVerificationMail}
//   cta={`Reenviar código de confirmção`}
//   initialTime={75000}
// />

// //fetchers
// import logout from 'src/lib/fetchers/session/logout';
// //components
// import Link from 'next/link';
// import Image from 'next/image';
// //style
// import styles from 'src/templates/Confirm/index.module.css';
// import verifyCode from 'src/lib/chains/verifyCode';
// //hooks
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// //tyopes
// import type Session from 'src/types/Session';
//
// type Props = {
//   parentSession: Session;
// };
//
// export default function Confirm({ parentSession }: Props) {
//   const router = useRouter();
//   const [confirmResult, setConfirmResult] = useState('');
//   const [session, setSession] = useState<Session | undefined>(
//     parentSession,
//   );
//
//   useEffect(() => {
//     return () => {
//       setConfirmResult('');
//       setSession(undefined);
//     };
//   }, []);
//
//   async function handleConfirm(submitEvent: any) {
//     setConfirmResult('');
//     submitEvent.preventDefault();
//
//     const verificationCode = submitEvent.target.verificationCode
//       .value as string;
//     const email = session?.user?.email as string;
//     const hashFragment = session?.user
//       ?.fragment_hash_password as string;
//
//     const verifyCodeResult = await verifyCode({
//       verificationCode,
//       hashFragment,
//       email,
//     });
//     setConfirmResult(verifyCodeResult.ok as string);
//   }
//
//   return (
//     <div className={styles.container}>
//       <Link href="/">
//         <a>
//           <Image
//             src="/logo-pdt-blue.png"
//             alt="pdt Logo"
//             width={75}
//             height={75}
//           />
//         </a>
//       </Link>
//       <main>
//         <h1>Confirme sua conta na Plataforma de Treinos</h1>
//         <p>
//           Digite o número de 5 dígitos enviado ao email{' '}
//           {session?.user?.email}
//         </p>
//         <form onSubmit={handleConfirm}>
//           <div>
//             <label htmlFor="verificationCode">
//               Código de verificação:
//             </label>
//             <input
//               type="text"
//               id="verificationCode"
//               name="verificationCode"
//             />
//           </div>
//           <div className={styles.buttonBox}>
//             <button type="submit">Enviar</button>
//           </div>
//         </form>
//         {confirmResult}
//         <div className={styles.grid}>
//           <button
//             type="button"
//             onClick={() =>
//               logout({ redirect: false, callbackUrl: '/' }).then(
//                 (result) => router.push(result.url),
//               )
//             }
//           >
//             sair de {session?.user?.email}
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }
