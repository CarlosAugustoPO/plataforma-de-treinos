import styles from './styles.module.css';
import Card from '@mui/material/Card';

export default function MyCard(props: {
  children: React.ReactNode;
}): JSX.Element {
  return <Card className={styles.card}>{props.children}</Card>;
}
