import React, { PropsWithChildren } from 'react';
import { Box, CssBaselineProps } from '@mui/material';
import { useResponsive } from '@/hooks/useResponsive';
import { HEADER, NAV } from '@/layouts/ConfigLayout';

interface Props {
  sx: CssBaselineProps;
}

export default function Main({
  children,
  sx,
  ...other
}: PropsWithChildren<Props>) {
  const lgUp = useResponsive('up', 'lg');
  const SPACING = 8;

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        py: `${HEADER.H_MOBILE + SPACING}px`,
        ...(lgUp && {
          px: 2,
          py: `${HEADER.H_DESKTOP + SPACING}px`,
          width: `calc(100% - ${NAV.W_VERTICAL}px)`,
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
