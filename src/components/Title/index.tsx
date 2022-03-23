import Typography from '@mui/material/Typography';

export default function Title(props: {
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
  sx?: object;
  color?: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
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
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit';
  component?: React.ElementType;
  children?: React.ReactNode;
}): JSX.Element {
  return <Typography {...props}>{props.children}</Typography>;
}
