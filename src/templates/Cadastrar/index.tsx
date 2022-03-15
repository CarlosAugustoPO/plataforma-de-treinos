import Link from 'next/link';
import Image from 'next/image';
import styles from 'src/templates/Cadastrar/index.module.css';
import Head from 'next/head';
import createUser from 'src/lib/fetchers/user/create';
import createMagicLink from 'src/lib/fetchers/mail/magicLink';
import deleteUser from 'src/lib/fetchers/user/delete';
import login from 'src/lib/fetchers/session/login';
import { sendVerificationMail } from 'src/lib/chains/sendVerificationMail';
import { useState, useEffect } from 'react';

export default function CadastrarTemplate() {
  const [signUpResult, setSignUpResult] = useState<
    undefined | string
  >('');
  useEffect(() => {
    return () => {
      setSignUpResult('');
    };
  }, []);

  async function handleSignUp(submitEvent: any) {
    setSignUpResult('');
    submitEvent.preventDefault();
    const fname = submitEvent.target.fname.value;
    const lname = submitEvent.target.lname.value;
    const email = submitEvent.target.email.value;
    const emailConfirm = submitEvent.target.emailConfirm.value;
    const password = submitEvent.target.password.value;
    const passwordConfirm =
      submitEvent.target.passwordConfirm.value;
    if (
      !fname ||
      !lname ||
      !email ||
      !emailConfirm ||
      !password ||
      !passwordConfirm
    ) {
      setSignUpResult('Não deixe campos em branco');
      return;
    }
    if (passwordConfirm !== password) {
      setSignUpResult('Os campos de senha devem ser iguais');
      return;
    }
    if (emailConfirm !== email) {
      setSignUpResult('Os campos de email devem ser iguais');
      return;
    }
    if (password.length > 15) {
      setSignUpResult(
        'A senha deve ter no máximo 15 caracteres',
      );
      return;
    }

    const signUpJson = await createUser({
      fname,
      lname,
      email,
      password,
    });
    if (signUpJson.error) {
      setSignUpResult(signUpJson.error.toString());
      return;
    }

    const createMagicLinkResult = await createMagicLink(email);
    if (createMagicLinkResult.error) {
      setSignUpResult(createMagicLinkResult.error.toString());
    }

    const sendVerificationMailResult =
      await sendVerificationMail(email);
    if (sendVerificationMailResult.error) {
      await deleteUser(email);
      setSignUpResult(sendVerificationMailResult.error);
      return;
    }

    const loginResult = await login({
      email,
      password,
      redirect: false,
    });
    if (loginResult?.error) {
      setSignUpResult(loginResult.error);
      return;
    }

    setSignUpResult(signUpJson.ok);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Cadastre-se na Plataforma de treinos</title>
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
        <h1>Cadastre-se na Plataforma de Treinos</h1>
        <p>Informe seus dados para registrar-se</p>
        <form onSubmit={handleSignUp}>
          <div>
            <label htmlFor="fname">Primeiro nome: </label>
            <input
              type="text"
              id="fname"
              name="fname"
              autoComplete="fname"
              defaultValue="Guto"
            />
          </div>
          <div>
            <label htmlFor="lname">Sobrenome: </label>
            <input
              type="text"
              id="lname"
              name="lname"
              autoComplete="lname"
              defaultValue="Guto"
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="email"
              defaultValue="prof.carlos.aug@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="emailConfirm">
              Confirme seu email:
            </label>
            <input
              type="text"
              id="emailConfirm"
              name="emailConfirm"
              autoComplete="none"
              defaultValue="prof.carlos.aug@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="password">Senha: </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              defaultValue="111111"
            />
          </div>
          <div>
            <label htmlFor="passwordConfirm">
              Confirme sua senha:
            </label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              autoComplete="none"
              defaultValue="111111"
            />
          </div>

          <div className={styles.buttonBox}>
            <button type="submit">Registrar</button>
          </div>
        </form>
        {signUpResult}
        <div className={styles.grid}>
          {
            <Link href="/entrar">
              <a>Já tem uma conta? Entrar</a>
            </Link>
          }
        </div>
      </main>
    </div>
  );
}
