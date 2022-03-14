import styles from './styles.module.css';
import Card from '@mui/material/Card';

type Props = {
  children?: React.ReactNode;
};

export default function MyCard({ children }: Props) {
  return <Card className={styles.card}>{children}</Card>;
}
