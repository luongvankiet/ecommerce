import Logo from '@/Components/Logo';
import ProfileDropdown from '@/Components/ProfileDropdown';
import RouterLink from '@/Components/RouterLink';
import { useOffSetTop } from '@/Hooks/useOffSetTop';
import { useResponsive } from '@/Hooks/useResponsive';
import { HEADER } from '@/Layouts/ConfigLayout';
import { routes } from '@/routes';
import { User } from '@/types';
import { usePage } from '@inertiajs/react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  useTheme,
} from '@mui/material';
import React from 'react';
import NavDesktop from './Desktop';
import { navConfig } from '../ConfigNavigation';
import { bgBlur } from '@/Theme/css';
import SettingsButton from '@/Components/SettingsButton';
import NavMobile from './Mobile';

export default function Header() {
  const { auth } = usePage().props;
  const { user }: { user?: User } = auth;

  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
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
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Logo />

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />}

          <Stack
            alignItems="center"
            direction={{ xs: 'row', md: 'row-reverse' }}
          >
            {!user ? (
              <Button
                component={RouterLink}
                href={routes.auth.login}
                variant="outlined"
                sx={{ mr: 1 }}
              >
                Login
              </Button>
            ) : (
              <ProfileDropdown />
            )}

            <SettingsButton
              sx={{
                ml: { xs: 1, md: 0 },
                mr: { md: 2 },
              }}
            />

            {/* <LanguagePopover /> */}

            {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />}
          </Stack>
        </Container>
      </Toolbar>

      {/* {offsetTop && <HeaderShadow />} */}
    </AppBar>
  );
}
