import { useOffSetTop } from '@/Hooks/useOffSetTop';
import React from 'react';
import { AppBar, Box, Toolbar, useTheme } from '@mui/material';
import { HEADER } from '@/Layouts/ConfigLayout';
import Logo from '@/Components/Logo';
import { bgBlur } from '@/Theme/css';

export default function Header() {
  const theme = useTheme();
  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Logo />
      </Toolbar>

      {offsetTop && (
        <Box
          sx={{
            left: 0,
            right: 0,
            bottom: 0,
            m: 'auto',
            height: 24,
            zIndex: -1,
            opacity: 0.48,
            borderRadius: '50%',
            position: 'absolute',
            width: `calc(100% - 48px)`,
            boxShadow: theme => theme.customShadows.z8,
          }}
        />
      )}
    </AppBar>
  );
}
