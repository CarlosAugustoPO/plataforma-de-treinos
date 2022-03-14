import Typography from '@mui/material/Typography';
import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'inherit'
    | 'overline'
    | undefined;
  color?: string;
  component?: any | undefined;
};

export default function Title({
  children,
  variant,
  component,
  color,
}: Props) {
  return (
    <Typography
      className={styles.title}
      variant={variant}
      color={color}
      component={component}
    >
      {children}
    </Typography>
  );
}
