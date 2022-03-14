import styles from './styles.module.css';

type Props = {
  children?: React.ReactNode;
};

export default function Main({ children }: Props) {
  return (
    <div className={styles.main}>
      <main>{children}</main>
    </div>
  );
}
