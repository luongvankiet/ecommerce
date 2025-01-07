import React, { forwardRef, ReactNode } from 'react';
// icons
import { Icon } from '@iconify/react';
// @mui
import Box from '@mui/material/Box';
import { CssBaselineProps } from '@mui/material';
// ----------------------------------------------------------------------

interface IconifyProps {
  icon: ReactNode;
  sx: CssBaselineProps;
  width: number;
}

const Iconify = forwardRef(function Iconify(
  { icon, width = 20, sx, ...other }: IconifyProps,
  ref,
) {
  return (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  );
});

export default Iconify;
