import React, { PropsWithChildren } from 'react';
import merge from 'lodash/merge';
import { useMemo } from 'react';
// @mui
import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';

// components
import { useSettingsContext } from '@/Components/Settings';
// system
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';
import { customShadows } from './CustomShadows';
import { componentsOverrides } from './Overrides';
// options
import { presets } from './Options/presets';
import { darkMode } from './Options/DarkMode';
import { contrast } from './Options/Contrast';
import RTL, { direction } from './Options/RightToLeft';

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }: PropsWithChildren) {
  const settings = useSettingsContext();

  const darkModeOption = darkMode(settings.themeMode);

  const presetsOption = presets(settings.themeColorPresets);

  const contrastOption = contrast(
    settings.themeContrast === 'bold',
    settings.themeMode,
  );

  const directionOption = direction(settings.themeDirection);

  const baseOption = useMemo(
    () => ({
      palette: palette('light'),
      shadows: shadows('light'),
      customShadows: customShadows('light'),
      typography,
      shape: { borderRadius: 8 },
    }),
    [],
  );

  const memoizedValue = useMemo(
    () =>
      merge(
        // Base
        baseOption,
        // Direction: remove if not in use
        directionOption,
        // Dark mode: remove if not in use
        darkModeOption,
        // Presets: remove if not in use
        presetsOption,
        // Contrast: remove if not in use
        contrastOption.theme,
      ),
    [
      baseOption,
      directionOption,
      darkModeOption,
      presetsOption,
      contrastOption.theme,
    ],
  );

  const theme = createTheme(memoizedValue);

  theme.components = merge(
    componentsOverrides(theme),
    contrastOption.components,
  );

  return (
    <MuiThemeProvider theme={theme}>
      <RTL themeDirection={settings.themeDirection}>
        <CssBaseline />
        {children}
      </RTL>
    </MuiThemeProvider>
  );
}
