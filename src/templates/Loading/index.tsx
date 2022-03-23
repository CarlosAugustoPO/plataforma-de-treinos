import Image from 'next/image';
import styles from './index.module.css';

export default function LoadingTemplate(Props: {
  children?: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <main>
        <Image
          src="/logo-pdt-blue.png"
          alt="Pdt Logo"
          width={75}
          height={75}
        />
        <div>{Props.children}</div>
      </main>
    </div>
  );
}
