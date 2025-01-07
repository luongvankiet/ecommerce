import React, { PropsWithChildren } from 'react';
// @mui
import { menuItemClasses } from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
//
import { getPosition } from './utils';
import { StyledArrow } from './styles';
import { CssBaselineProps } from '@mui/material';

// ----------------------------------------------------------------------

interface CustomPopoverProps {
  sx: CssBaselineProps;
  open: object;
  hiddenArrow: bool;
  disabledArrow: bool;
  arrow:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'left-top'
    | 'left-center'
    | 'left-bottom'
    | 'right-top'
    | 'right-center'
    | 'right-bottom';
}

export default function CustomPopover({
  open,
  children,
  arrow = 'top-right',
  hiddenArrow,
  sx,
  ...other
}: PropsWithChildren<CustomPopoverProps>) {
  const { style, anchorOrigin, transformOrigin } = getPosition(arrow);

  return (
    <Popover
      open={Boolean(open)}
      anchorEl={open}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      slotProps={{
        paper: {
          sx: {
            width: 'auto',
            overflow: 'inherit',
            ...style,
            [`& .${menuItemClasses.root}`]: {
              '& svg': {
                mr: 2,
                flexShrink: 0,
              },
            },
            ...sx,
          },
        },
      }}
      {...other}
    >
      {!hiddenArrow && <StyledArrow arrow={arrow} />}

      {children}
    </Popover>
  );
}
