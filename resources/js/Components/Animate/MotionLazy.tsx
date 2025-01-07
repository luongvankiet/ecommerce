import React, { PropsWithChildren } from 'react';
import { LazyMotion, m, domMax } from 'framer-motion';

// ----------------------------------------------------------------------

export function MotionLazy({ children }: PropsWithChildren) {
  return (
    <LazyMotion strict features={domMax}>
      <m.div style={{ height: '100%' }}> {children} </m.div>
    </LazyMotion>
  );
}
