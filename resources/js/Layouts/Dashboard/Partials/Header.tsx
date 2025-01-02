import { SvgColor } from '@/Components/Icons';
import ProfileDropdown from '@/Components/ProfileDropdown';
import { APP_URL } from '@/ConfigGlobal';
import { useResponsive } from '@/Hooks/useResponsive';
import { HEADER, NAV } from '@/layouts/ConfigLayout';
import { bgBlur } from '@/Theme/css';
import { AppBar, IconButton, Stack, Toolbar, useTheme } from '@mui/material';
import React from 'react';

interface Props {
  onOpenNav?(): void;
}

export default function Header({ onOpenNav }: Props) {
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  return (
    <AppBar
      sx={{
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.W_VERTICAL + 1}px)`,
          height: HEADER.H_DESKTOP_OFFSET,
        }),
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {!lgUp && (
          <IconButton onClick={onOpenNav}>
            <SvgColor src={`${APP_URL}/assets/icons/navbar/ic_menu_item.svg`} />
          </IconButton>
        )}

        {/* <Searchbar /> */}

        <Stack
          flexGrow={1}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={{ xs: 0.5, sm: 1 }}
        >
          <ProfileDropdown />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
