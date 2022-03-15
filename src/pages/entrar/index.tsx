import Link from 'next/link';
import Image from 'next/image';
import styles from 'src/templates/Entrar/index.module.css';
import { useState } from 'react';
import LoadingTemplate from 'src/templates/Loading/index';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import login from 'src/lib/fetchers/session/login';
import MyHeader from 'src/components/MyHeader/index';
import useStatus from 'src/lib/hooks/useStatus';

export default function Entrar() {
  const router = useRouter();
  const [loginResult, setLoginResult] = useState('');

  const status = useStatus();
  if (status === 'loading') {
    return <LoadingTemplate />;
  }
  if (status === 'authenticated') {
    router.push('/painel');
    return <LoadingTemplate />;
  }

  async function handleLogin(submitEvent: any) {
    setLoginResult('');
    submitEvent.preventDefault();
    const email = submitEvent.target.email.value;
    const password = submitEvent.target.password.value;
    if (password.length > 15) {
      setLoginResult('A senha deve ter no máximo 15 caracteres');
      return;
    }
    const loginResult = await login({
      redirect: false,
      email,
      password,
    });
    if (loginResult?.error) {
      setLoginResult(loginResult.error);
      return;
    }
    setLoginResult('Login com sucesso');
  }
  return (
    <div className={styles.container}>
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
        <h1>Entre na Plataforma de Treinos</h1>
        <p>Coloque suas credenciais para entrar</p>
        <form onSubmit={handleLogin}>
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
            <label htmlFor="senha">Senha: </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              defaultValue="111111"
            />
          </div>
          <div className={styles.buttonBox}>
            <button type="submit">Entrar</button>
          </div>
        </form>
        {loginResult}
        <div className={styles.grid}>
          {
            <Link href="/cadastrar">
              <a>cadastrar</a>
            </Link>
          }
        </div>
      </main>
    </div>
  );
}
