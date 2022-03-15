import Header from 'src/components/vendor/mui/Header';
import styles from './styles.module.css';

type Props = {
  children?: React.ReactNode;
};

export default function MyHeader({ children }: Props) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}
