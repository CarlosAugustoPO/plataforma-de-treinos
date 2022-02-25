import Link from 'next/link';
import Image from 'next/image';
import styles from '../../src/styles/index.module.css';
import Head from 'next/head';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plataforma de treinos</title>
        <link rel="icon" href="/logo-pdt.png" />
      </Head>
      <main>
        <Image
          src="/logo-pdt-light.png"
          alt="Vercel Logo"
          width={75}
          height={75}
        />
        <h1>Plataforma de treinos</h1>
        <h2>Site em construção</h2>
        <div className={styles.grid}>
          {
            //  <Link href="/entrar">
            //   <a>entrar</a>
            // </Link>
            // <Link href="/cadastrar">
            //   <a>cadastrar</a>
            // </Link>
          }
        </div>
      </main>
    </div>
  );
}
