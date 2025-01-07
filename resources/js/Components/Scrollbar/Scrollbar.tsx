import React from 'react';
import { memo, forwardRef, PropsWithChildren } from 'react';
// @mui
import Box from '@mui/material/Box';
//
import { StyledRootScrollbar, StyledScrollbar } from './styles';
import { CssBaselineProps } from '@mui/material';

// ----------------------------------------------------------------------

interface ScrollbarProps {
  sx: CssBaselineProps;
}

const Scrollbar = forwardRef(function Scrollbar(
  { children, sx, ...other }: PropsWithChildren<ScrollbarProps>,
  ref,
) {
  const userAgent =
    typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    );

  if (isMobile) {
    return (
      <Box ref={ref} sx={{ overflow: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <StyledRootScrollbar>
      <StyledScrollbar
        scrollableNodeProps={{
          ref,
        }}
        clickOnTrack={false}
        sx={sx}
        {...other}
      >
        {children}
      </StyledScrollbar>
    </StyledRootScrollbar>
  );
});

export default memo(Scrollbar);
