import Box, { BoxProps } from '@mui/material/Box';
import styles from 'src/components/SnackBox/index.module.css';
export default function SnackBox({
  children,
  display,
  sx = {
    backgroundColor: 'backgroundSnackbar.main',
    color: 'textSnackbar.main',
    bottom: '0px',
    position: 'fixed',
  },
}: BoxProps) {
  const defaultSx = {
    backgroundColor: 'backgroundSnackbar.main',
    color: 'textSnackbar.main',
  };
  return (
    <Box
      className={styles.snackBox}
      sx={{
        ...defaultSx,
        ...sx,
        display: display,
      }}
    >
      {children}
    </Box>
  );
}
