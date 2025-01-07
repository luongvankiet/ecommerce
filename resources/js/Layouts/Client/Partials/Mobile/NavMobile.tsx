import React from 'react';
import { useEffect } from 'react';
// @mui
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// hooks
import { useBoolean } from '@/hooks/useBoolean';
//
import NavList from './NavList';
import { usePage } from '@inertiajs/react';
import { SvgColor } from '@/components/icons';
import Scrollbar from '@/components/scrollbar';
import Logo from '@/components/logo';

// ----------------------------------------------------------------------

interface NavMobileProps {
  data: array;
  offsetTop: bool;
}

export default function NavMobile({ offsetTop, data }: NavMobileProps) {
  const nav = useBoolean();

  const { current_route_name } = usePage().props;

  useEffect(() => {
    if (nav.value) {
      nav.onFalse();
    }
  }, [current_route_name]);

  return (
    <>
      <IconButton
        onClick={nav.onTrue}
        sx={{
          ml: 1,
          ...(offsetTop && {
            color: 'text.primary',
          }),
        }}
      >
        <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
      </IconButton>

      <Drawer
        open={nav.value}
        onClose={nav.onFalse}
        PaperProps={{
          sx: {
            pb: 5,
            width: 260,
          },
        }}
      >
        <Scrollbar>
          <Logo sx={{ mx: 2.5, my: 3 }} />

          <List component="nav" disablePadding>
            {data.map(link => (
              <NavList key={link.title} item={link} />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}
