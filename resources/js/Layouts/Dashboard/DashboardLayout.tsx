import React, { PropsWithChildren } from 'react';
import Header from './Partials/Header';
import { Head } from '@inertiajs/react';
import { Box } from '@mui/material';
import Sidebar from './Partials/Sidebar';
import { useBoolean } from '@/Hooks/useBoolean';
import Main from './Partials/Main';

interface Props {
  title: string;
}

export default function DashboardLayout({
  title,
  children,
}: PropsWithChildren<Props>) {
  const open = useBoolean();

  return (
    <div>
      <Head title={title} />

      <Header onOpenNav={open.onTrue} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Sidebar openNav={open.value} onCloseNav={open.onFalse} />
        <Main>{children}</Main>
      </Box>
    </div>
  );
}
