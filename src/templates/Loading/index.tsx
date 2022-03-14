import Image from 'next/image';
import styles from './index.module.css';

type Props = {
  children?: React.ReactNode;
};

export default function LoadingTemplate({ children }: Props) {
  return (
    <div className={styles.container}>
      <main>
        <Image
          src="/logo-pdt-light.png"
          alt="Pdt Logo"
          width={75}
          height={75}
        />
        <div>{children}</div>
      </main>
    </div>
  );
}
