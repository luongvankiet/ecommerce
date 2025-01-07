import React from 'react';
// @mui
import Stack from '@mui/material/Stack';
//
import NavList from './NavList';

// ----------------------------------------------------------------------

interface NavDesktopProps {
  data: array;
  offsetTop: bool;
}

export default function NavDesktop({ offsetTop, data }: NavDesktopProps) {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={5}
      sx={{ mr: 2.5, height: 1 }}
    >
      {data.map(link => (
        <NavList key={link.title} item={link} offsetTop={offsetTop} />
      ))}
    </Stack>
  );
}
