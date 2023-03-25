import Image from "next/image";
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
        src="/logo-pdt-light-theme.png"
        alt="Logo da Plataforma de Treinos"
        width={width}
        height={height}
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    );
  }

  if (settings.theme == 'dark') {
    return (
      <Image
        src="/logo-pdt-dark-theme.png"
        alt="Logo da Plataforma de Treinos"
        width={width}
        height={height}
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    );
  }

  return (
    <Image
      src="/logo-pdt-blue.png"
      alt="Logo da Plataforma de Treinos"
      width={width}
      height={height}
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  );
}
