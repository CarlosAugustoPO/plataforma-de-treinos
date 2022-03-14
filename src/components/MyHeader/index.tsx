import Header from 'src/components/vendor/mui/Header';

type Props = {
  children?: React.ReactNode;
};

export default function MyHeader({ children }: Props) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
