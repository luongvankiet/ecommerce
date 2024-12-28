import NProgress from 'nprogress';
import React, { useEffect, useState } from 'react';
// routes
//
import StyledProgressBar from './styles';

// ----------------------------------------------------------------------

export default function ProgressBar(): React.FC {
  const pathname = window.location.pathname;

  const [mounted, setMounted] = useState(false);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!visible) {
      NProgress.start();
      setVisible(true);
    }

    if (visible) {
      NProgress.done();
      setVisible(false);
    }

    if (!visible && mounted) {
      setVisible(false);
      NProgress.done();
    }

    return () => {
      NProgress.done();
    };
  }, [pathname, mounted]);

  if (!mounted) {
    return null;
  }

  return <StyledProgressBar />;
}
