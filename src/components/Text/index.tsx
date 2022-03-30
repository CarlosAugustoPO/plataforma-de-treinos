import Typography from '@mui/material/Typography';
import { TypographyProps } from '@mui/material/Typography';

type PlusComponent = {
  component?: React.ElementType;
};

type TypographyPropsPlusComponent = TypographyProps &
  PlusComponent;

export default function Title({
  variant = 'body1',
  component = 'p',
  color = 'text.primary',
  ...props
}: TypographyPropsPlusComponent): JSX.Element {
  return (
    <Typography
      variant={variant}
      component={component}
      color={color}
      {...props}
    >
      {props.children}
    </Typography>
  );
}
