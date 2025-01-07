import React, { PropsWithChildren } from 'react';
import { m } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
//
import { varContainer } from './Variants';

// ----------------------------------------------------------------------

interface MotionContainerProps {
  action: bool;
  animate: bool;
}

export default function MotionContainer({
  animate,
  action = false,
  children,
  ...other
}: PropsWithChildren<MotionContainerProps>) {
  if (action) {
    return (
      <Box
        component={m.div}
        initial={false}
        animate={animate ? 'animate' : 'exit'}
        variants={varContainer()}
        {...other}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}
