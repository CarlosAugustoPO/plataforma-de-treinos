import styles from './styles.module.css';
import Card from '@mui/material/Card';

export default function MyCard(props: {
  children: React.ReactNode;
  raised?: boolean;
  sx?: object;
}): JSX.Element {
  return <Card {...props} className={styles.card} />;
}
