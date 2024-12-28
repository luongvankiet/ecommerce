// ----------------------------------------------------------------------

export function Checkbox(theme) {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
        },
      },
    },
  };
}
