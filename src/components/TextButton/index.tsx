import Caption from 'src/components/Caption';
import styles from 'src/components/TextButton/index.module.css';
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
    | 'modalLinkInt'
    | 'pinkLinkInt'
    | 'pinkLinkWithoutRouter';
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
    <Caption
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
      {linkColor === 'modalLinkInt' && (
        <Link href={href}>
          <a className={styles.modal}>{cta}</a>
        </Link>
      )}
      {linkColor === 'pinkLinkWithoutRouter' && (
        <span className={styles.pureTextLinkButton}>{cta}</span>
      )}
    </Caption>
  );
}
