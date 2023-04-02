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
    width = 450;
  }

  if (!height) {
    height = 400;
  }

  if (settings.theme == 'light') {
    return (
      <Image
        src="/img-man-1-white.png"
        alt="Logo da Plataforma de Treinos"
        width={width}
        height={height}
        style={{
          maxWidth: "100%",
          height: "auto",
          width: "auto"
        }} />
    );
  }

  if (settings.theme == 'dark') {
    return (
      <Image
        src="/img-man-1-dark.png"
        alt="Logo da Plataforma de Treinos"
        width={width}
        height={height}
        style={{
          maxWidth: "100%",
          height: "auto",
          width: "auto"
        }} />
    );
  }

  return (
    <Image
      src="/img-man-1.png"
      alt="Logo da Plataforma de Treinos"
      width={width}
      height={height}
      style={{
        maxWidth: "100%",
        height: "auto",
          width: "auto"
      }} />
  );
}
