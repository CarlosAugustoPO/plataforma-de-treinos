import Caption from 'src/components/Caption/index';
import Image from "next/legacy/image";
import styles from './index.module.css';
import { useTheme } from '@mui/material';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingTemplate(Props: {
  children?: React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <main className={styles.outterContainer}>
      {theme.palette.mode === 'light' && (
        <div className={styles.innerContainer}>
          <Image
            src="/logo-pdt-light-theme.png"
            alt="Pdt Logo for light theme"
            width={35}
            height={35}
            layout="fixed"
            priority
          />
          <Caption>
            {Props.children || 'Carregando, aguarde...'}
          </Caption>
          <CircularProgress
            sx={{ position: 'absolute' }}
            size="155px"
            disableShrink
            thickness={1}
          />
        </div>
      )}
      {theme.palette.mode === 'dark' && (
        <div className={styles.innerContainer}>
          <Image
            src="/logo-pdt-dark-theme.png"
            alt="Pdt Logo for dark theme"
            width={35}
            height={35}
            layout="fixed"
            priority
          />
          <Caption>
            {Props.children || 'Carregando, aguarde...'}
          </Caption>
          <CircularProgress
            sx={{ position: 'absolute' }}
            size="155px"
            disableShrink
            thickness={1}
          />
        </div>
      )}
    </main>
  );
}
