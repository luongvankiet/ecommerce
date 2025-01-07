//
import React from 'react';
import { Iconify } from '../Icons';

// ----------------------------------------------------------------------

interface LeftIconProps {
  icon: string;
  isRTL: bool;
}
export function LeftIcon({
  icon = 'eva:arrow-ios-forward-fill',
  isRTL,
}: LeftIconProps) {
  return (
    <Iconify
      icon={icon}
      sx={{
        transform: ' scaleX(-1)',
        ...(isRTL && {
          transform: ' scaleX(1)',
        }),
      }}
    />
  );
}

interface RightIconProps {
  icon: string;
  isRTL: bool;
}

export function RightIcon({
  icon = 'eva:arrow-ios-forward-fill',
  isRTL,
}: RightIconProps) {
  return (
    <Iconify
      icon={icon}
      sx={{
        ...(isRTL && {
          transform: ' scaleX(-1)',
        }),
      }}
    />
  );
}
