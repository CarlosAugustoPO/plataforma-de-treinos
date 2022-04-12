import Header from 'src/components/vendor/mui/Header/index';
import styles from './styles.module.css';

export default function MyHeader(props: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.main}>{props.children}</main>
    </>
  );
}
