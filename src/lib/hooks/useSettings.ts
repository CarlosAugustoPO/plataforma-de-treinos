import { useContext } from 'react';
import SettingsContext from 'src/lib/contexts/SettingsContext';

const useSettings = () => useContext(SettingsContext);

export default useSettings;
