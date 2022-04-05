import Box, { BoxProps } from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Backdrop from '@mui/material/Backdrop';
import styles from 'src/components/SettingBox/index.module.css';

export default function SettingsBox({
  children,
  display,
  sx = {
    backgroundColor: 'backgroundSettingsBox.main',
    color: 'textSettingsBox.main',
  },
}: BoxProps) {
  return (
    <Grid className={styles.settingsBackground}>
      <Backdrop open={display === 'none' ? false : true}>
        <Box
          className={styles.settingsBox}
          sx={{
            ...sx,
            display: display,
          }}
        >
          {children}
        </Box>
      </Backdrop>
    </Grid>
  );
}
