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
    width = 60;
  }

  if (!height) {
    height = 30;
  }

  if (settings.theme == 'light') {
    return (
      <Image
        src="/stripe-logo.png"
        alt="Logo stripe"
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
        src="/stripe-logo.png"
        alt="Logo stripe"
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
      src="/stripe-logo.png"
      alt="Logo stripe"
      width={width}
      height={height}
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  );
}
