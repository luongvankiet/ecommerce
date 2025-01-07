import { Head } from '@inertiajs/react';
import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import Footer from './Partials/Footer';
import Header from './Partials/Header';

interface Props {
  title: string;
}

export default function ClientLayout({
  title,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Head title={title} />

      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
}
