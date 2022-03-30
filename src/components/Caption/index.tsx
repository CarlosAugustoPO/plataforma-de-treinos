import Typography from "@mui/material/Typography";
import { TypographyProps } from "@mui/material/Typography";

type PlusComponent = {
  component?: React.ElementType;
};

type TypographyPropsPlusComponent = TypographyProps & PlusComponent;

export default function Title({
  color = "text.secondary",
  variant = "caption",
  align = "center",
  margin = "auto",
  ...props
}: TypographyPropsPlusComponent): JSX.Element {
  return (
    <Typography
      variant={variant}
      align={align}
      margin={margin}
      color={color}
      {...props}
    >
      {props.children}
    </Typography>
  );
}
