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
    width = 30;
  }

  if (!height) {
    height = 30;
  }

  if (settings.theme == 'light') {
    return (
      <Image
        // src="/logo-pdt-light.png"
        src="/logo-pdt-blue.png"
        alt="Logo da Plataforma de Treinos"
        width={width}
        height={height}
      />
    );
  }

  if (settings.theme == 'dark') {
    return (
      <Image
        src="/logo-pdt-purple.png"
        alt="Logo da Plataforma de Treinos"
        width={width}
        height={height}
      />
    );
  }

  return (
    <Image
      src="/logo-pdt-light.png"
      alt="Logo da Plataforma de Treinos"
      width={width}
      height={height}
    />
  );
}
