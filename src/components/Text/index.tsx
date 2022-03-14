import Typography from '@mui/material/Typography';
import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
  gutterBottom?: boolean;
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
  onClick?: any;
  component?: any | undefined;
  align?: 'left' | 'center' | 'right';
  fontSize?: string;
  sx?: object;
  mt?: number;
};

export default function Text(props: Props) {
  return <Typography {...props}>{props.children}</Typography>;
}
