import { palette } from '../palette';
import { shadows } from '../shadows';
import { customShadows } from '../CustomShadows';

// ----------------------------------------------------------------------

export function darkMode(mode) {
  const theme = {
    palette: palette(mode),
    shadows: shadows(mode),
    customShadows: customShadows(mode),
  };

  return theme;
}
