//
import { menuItem } from '../../css';

// ----------------------------------------------------------------------

export function Menu(theme) {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...menuItem(theme),
        },
      },
    },
  };
}
