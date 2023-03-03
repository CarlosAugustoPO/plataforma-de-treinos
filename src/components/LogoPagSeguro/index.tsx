import Image from 'next/image';
import useSettings from 'src/lib/hooks/useSettings';

export default function Logo(props: {
  width?: number;
  height?: number;
}): JSX.Element {
  const { settings } = useSettings();
  let width = props.width;
  let height = props.width;

  if (!width) {
    width = 100;
  }

  if (!height) {
    height = 30;
  }

  if (settings.theme == 'light') {
    return (
      <Image
        src="/pagseguro-logo-small.png"
        alt="Logo PagSeguro"
        width={width}
        height={height}
      />
    );
  }

  if (settings.theme == 'dark') {
    return (
      <Image
        src="/pagseguro-branco.png"
        alt="Logo PagSeguro"
        width={width}
        height={height}
      />
    );
  }

  return (
    <Image
      src="/pagseguro-logo-smalll.png"
      alt="Logo PagSeguro"
      width={width}
      height={height}
    />
  );
}
