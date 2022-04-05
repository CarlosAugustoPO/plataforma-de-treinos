import styles from 'src/components/TextButton/index.module.css';
import Typography from '@mui/material/Typography';
import { TypographyProps } from '@mui/material/Typography';
import Link from 'next/link';

type PlusOptions = {
  component?: React.ElementType;
  cta: string;
  linkColor?:
    | 'disabled'
    | 'cyan'
    | 'default'
    | 'modal'
    | 'pinkLinkInt';
  href?: any;
  target?: string;
  rel?: string;
};

type TypographyPropsPlusOptions = TypographyProps & PlusOptions;

/**
 * @Tip The color of "\<a\>" element shold be changed in css file with css
 * variables
 */

export default function TextButton({
  variant = 'caption',
  sx = {},
  cta = 'Abrir modal',
  linkColor = 'default',
  href = undefined,
  target = undefined,
  rel = undefined,
  ...props
}: Omit<TypographyPropsPlusOptions, 'color'>): JSX.Element {
  return (
    <Typography
      variant={variant}
      sx={{ cursor: 'pointer', ...sx }}
      {...props}
    >
      {linkColor === 'disabled' && (
        <span className={styles.disabled}>{cta}</span>
      )}
      {linkColor === 'cyan' && (
        <a
          href={href}
          target={target}
          rel={rel}
          className={styles.cyan}
        >
          {cta}
        </a>
      )}
      {linkColor === 'modal' && (
        <a
          href={href}
          target={target}
          rel={rel}
          className={styles.modal}
        >
          {cta}
        </a>
      )}
      {linkColor === 'default' && (
        <a
          href={href}
          rel={rel}
          target={target}
          className={styles.default}
        >
          {cta}
        </a>
      )}
      {linkColor === 'pinkLinkInt' && (
        <Link href={href}>
          <a className={styles.pinkLinkInt}>{cta}</a>
        </Link>
      )}
    </Typography>
  );
}
