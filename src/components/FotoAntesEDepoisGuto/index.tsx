import Image from "next/legacy/image";
import useSettings from 'src/lib/hooks/useSettings';

export default function Logo(props: {
  width?: number;
  height?: number;
}): JSX.Element {
  const { settings } = useSettings();
  let width = props.width;
  let height = props.width;

  if (!width) {
    width = 395;
  }

  if (!height) {
    height = 350;
  }
  const style = {
    maxWidth: '95%',
  };

  if (settings.theme == 'light') {
    return (
      <Image
        src="/adguto-white.png"
        alt="Logo da Plataforma de Treinos"
        width={width}
        height={height}
        style={style}
      />
    );
  }

  if (settings.theme == 'dark') {
    return (
      <Image
        src="/adguto-dark.png"
        alt="Logo da Plataforma de Treinos"
        width={width}
        height={height}
        style={style}
      />
    );
  }

  return (
    <Image
      src="/adguto.png"
      alt="Logo da Plataforma de Treinos"
      width={width}
      height={height}
      sx={style}
    />
  );
}
