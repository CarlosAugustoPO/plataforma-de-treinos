import Typography from '@mui/material/Typography';
import { TypographyProps } from '@mui/material/Typography';

type PlusComponent = {
  component?: React.ElementType;
};

type TypographyPropsPlusComponent = TypographyProps &
  PlusComponent;

export default function Title({
  variant = 'h5',
  component = 'h2',
  color = 'title.main',
  ...props
}: TypographyPropsPlusComponent): JSX.Element {
  return (
    <Typography
      variant={variant}
      component={component}
      color={color}
      fontFamily="Carter One"
      {...props}
    >
      {props.children}
    </Typography>
  );
}
