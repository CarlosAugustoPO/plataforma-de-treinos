import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes';
import useSettings from 'src/lib/hooks/useSettings';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { THEMES } from 'src/lib/utils/constants';

export default function DarkModeToggle(): JSX.Element | null {
  const [mounted, setMounted] = useState(false);
  // const { theme, setTheme } = useTheme();
  const { saveSettings, settings } = useSettings();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  // const checked = theme == 'dark' ? true : false;

  return (
    <Box display="flex">
      {settings.theme === THEMES.DARK ? (
        <Brightness7Icon
          onClick={() => saveSettings({ theme: THEMES.LIGHT })}
        />
      ) : (
        <Brightness4Icon
          onClick={() => saveSettings({ theme: THEMES.DARK })}
        />
      )}
    </Box>
  );
}
