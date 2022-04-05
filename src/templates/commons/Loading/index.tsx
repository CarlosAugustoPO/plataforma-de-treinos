import MyCard from 'src/components/MyCard/index';
import Image from 'next/image';
import styles from './index.module.css';
import { useTheme } from '@mui/material';

export default function LoadingTemplate(Props: {
  children?: React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <main className={styles.container}>
      <MyCard
        sx={{
          width: '100px',
          height: '100px',
          display: 'flex',
          alignContent: 'center',
          borderRadius: '50%',
        }}
      >
        {theme.palette.mode === 'light' && (
          <Image
            src="/logo-pdt-light-theme.png"
            alt="Pdt Logo for light theme"
            width={75}
            height={75}
            layout="fixed"
            priority
          />
        )}
        {theme.palette.mode === 'dark' && (
          <Image
            src="/logo-pdt-dark-theme.png"
            alt="Pdt Logo form dark theme"
            width={75}
            height={75}
            layout="fixed"
            priority
          />
        )}
      </MyCard>
      {Props.children || 'Carregando, aguarde...'}
    </main>
  );
}
