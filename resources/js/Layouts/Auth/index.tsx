import React, { PropsWithChildren } from 'react';
import Header from './Partials/Header';
import { Box, Card } from '@mui/material';
import { APP_URL } from '@/ConfigGlobal';

export default function AuthLayout({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return (
    <>
      <Header />

      <Box
        component="main"
        sx={{
          py: 12,
          display: 'flex',
          minHeight: '100vh',
          px: { xs: 2, md: 0 },
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          '&:before': {
            width: 1,
            height: 1,
            zIndex: -1,
            content: "''",
            opacity: 0.24,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundImage: `url(${APP_URL}/assets/background/overlay_4.jpg)`,
          },
        }}
      >
        <Card
          sx={{
            py: 5,
            px: 3,
            maxWidth: 420,
          }}
        >
          {children}
        </Card>
      </Box>
    </>
  );
}
