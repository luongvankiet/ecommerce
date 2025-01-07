import React, { PropsWithChildren } from 'react';
import { m } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
// hooks
import { useResponsive } from '@/hooks/useResponsive';
//
import { varContainer } from './Variants';

// ----------------------------------------------------------------------

interface MotionViewportProps {
  disableAnimatedMobile: bool;
}

export default function MotionViewport({
  children,
  disableAnimatedMobile = true,
  ...other
}: PropsWithChildren<MotionViewportProps>) {
  const smDown = useResponsive('down', 'sm');

  if (smDown && disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>;
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}
