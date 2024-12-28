import isEqual from 'lodash/isEqual';
import React, {
  useEffect,
  useMemo,
  useCallback,
  useState,
  PropsWithChildren,
} from 'react';
// hooks
import { useLocalStorage } from '@/Hooks/useLocalStorage';
// utils
import { localStorageGetItem } from '@/Utils/storageAvailable';
//
import { SettingsContext } from './SettingsContext';

// ----------------------------------------------------------------------

const STORAGE_KEY = 'settings';

interface Props {
  defaultSettings: unknown;
}

export function SettingsProvider({
  children,
  defaultSettings,
}: PropsWithChildren<Props>) {
  const { state, update, reset } = useLocalStorage(
    STORAGE_KEY,
    defaultSettings,
  );

  const [openDrawer, setOpenDrawer] = useState(false);

  const isArabic = localStorageGetItem('i18nextLng') === 'ar';

  useEffect(() => {
    if (isArabic) {
      onChangeDirectionByLang('ar');
    }
  }, [isArabic]);

  // Direction by lang
  const onChangeDirectionByLang = useCallback(
    lang => {
      update('themeDirection', lang === 'ar' ? 'rtl' : 'ltr');
    },
    [update],
  );

  // Drawer
  const onToggleDrawer = useCallback(() => {
    setOpenDrawer(prev => !prev);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setOpenDrawer(false);
  }, []);

  const canReset = !isEqual(state, defaultSettings);

  const memoizedValue = useMemo(
    () => ({
      ...state,
      onUpdate: update,
      // Direction
      onChangeDirectionByLang,
      // Reset
      canReset,
      onReset: reset,
      // Drawer
      open: openDrawer,
      onToggle: onToggleDrawer,
      onClose: onCloseDrawer,
    }),
    [
      reset,
      update,
      state,
      canReset,
      openDrawer,
      onCloseDrawer,
      onToggleDrawer,
      onChangeDirectionByLang,
    ],
  );

  return (
    <SettingsContext.Provider value={memoizedValue}>
      {children}
    </SettingsContext.Provider>
  );
}
