import styles from './styles.module.css';
import Card, { CardProps } from '@mui/material/Card';

type HideOptions = {
  hidden?: boolean;
};

type CardPropsWithHideOptions = CardProps & HideOptions;

export default function MyCard({
  raised = true,
  hidden,
  ...props
}: CardPropsWithHideOptions): JSX.Element {
  if (!hidden) {
    return (
      <Card {...props} raised={raised} className={styles.card} />
    );
  }
  return <div className={styles.card}>{props.children}</div>;
}
