import Link from 'src/components/vendor/mui/Link/index';

type Props = {
  children?: React.ReactNode;
  href?: string;
  color?: string;
  sx?: object;
};

export default function MyLink(props: Props) {
  return <Link {...props}>{props.children}</Link>;
}
