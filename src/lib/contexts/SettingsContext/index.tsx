import { createContext, useEffect, useState } from 'react';
import { THEMES } from 'src/lib/utils/constants';

const defaultSettings = {
  theme: THEMES.LIGHT,
};

type Theme = {
  theme: string;
};
const SettingsContext = createContext({
  settings: defaultSettings,
  saveSettings: ({ theme }: Theme) => {
    storeSettings({ theme });
  },
});

export const restoreSettings = () => {
  let settings = null;
  try {
    const storedData = window.localStorage.getItem('settings');

    if (storedData) {
      settings = JSON.parse(storedData);
    }
  } catch (err) {
    console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return settings;
};

type Props = {
  settings?: any;
  children?: React.ReactNode;
};

export const storeSettings = (settings: any) => {
  window.localStorage.setItem(
    'settings',
    JSON.stringify(settings),
  );
};

export const SettingsProvider = ({
  settings,
  children,
}: Props) => {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings,
  );

  const handleSaveSettings = (update = {}) => {
    const mergedSettings = update;
    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);

    const realScrollPos = window.scrollY;
    localStorage.setItem('scrollpos', realScrollPos as any);

    var maxScrollLimit = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
    );

    let corScrollLimit = maxScrollLimit - window.outerHeight;

    var scrollpos = localStorage.getItem('scrollpos');

    if (scrollpos) {
      let scrollposAsNumber = Number(scrollpos);
      let plusScrollPos = scrollposAsNumber + 1;
      let minusScrollPos = scrollposAsNumber - 1;

      if (scrollposAsNumber < corScrollLimit) {
        window.scrollTo(0, plusScrollPos);
        console.log('scroll menor que o limite');
      } else {
        window.scrollTo(0, minusScrollPos);
        console.log('scroll no limite');
      }
    }
  };

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setCurrentSettings(restoredSettings);
    }
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
