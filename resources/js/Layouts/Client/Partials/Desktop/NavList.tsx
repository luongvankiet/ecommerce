import React, { useMemo } from 'react';
import { useEffect } from 'react';
// @mui
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Portal from '@mui/material/Portal';
//
import { NavItem, NavItemDashboard } from './NavItem';
import { StyledSubheader, StyledMenu } from './styles';
import { usePage } from '@inertiajs/react';
import { useBoolean } from '@/Hooks/useBoolean';

// ----------------------------------------------------------------------

interface NavListProps {
  item: object;
  offsetTop: bool;
}

export default function NavList({ item, offsetTop }: NavListProps) {
  const { current_route_name } = usePage().props;

  const nav = useBoolean();

  const { path, children } = item;

  const active = useMemo(
    () =>
      item.path === current_route_name ||
      !!item.children?.find(subItem => subItem.path === current_route_name) ||
      false,
    [current_route_name],
  );

  const externalLink = path.includes('http');

  useEffect(() => {
    if (nav.value) {
      nav.onFalse();
    }
  }, [current_route_name]);

  const handleOpenMenu = () => {
    if (children) {
      nav.onTrue();
    }
  };

  return (
    <>
      <NavItem
        item={item}
        offsetTop={offsetTop}
        active={active}
        open={nav.value}
        externalLink={externalLink}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={nav.onFalse}
      />

      {!!children && nav.value && (
        <Portal>
          <Fade in={nav.value}>
            <StyledMenu
              onMouseEnter={handleOpenMenu}
              onMouseLeave={nav.onFalse}
              sx={{ display: 'flex' }}
            >
              {children.map(list => (
                <NavSubList
                  key={list.subheader}
                  subheader={list.subheader}
                  items={list.items}
                  isDashboard={list.subheader === 'Dashboard'}
                  onClose={nav.onFalse}
                />
              ))}
            </StyledMenu>
          </Fade>
        </Portal>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

interface NavSubListProps {
  isDashboard: bool;
  items: array;
  onClose(): void;
  subheader: string;
}

function NavSubList({
  items,
  isDashboard,
  subheader,
  onClose,
}: NavSubListProps) {
  const { current_route_name } = usePage().props;

  return (
    <Stack
      spacing={2}
      alignItems="flex-start"
      sx={{
        flexGrow: 1,
        ...(isDashboard && {
          maxWidth: 540,
        }),
      }}
    >
      <StyledSubheader disableSticky>{subheader}</StyledSubheader>

      {items.map(item =>
        isDashboard ? (
          <NavItemDashboard key={item.title} item={item} onClick={onClose} />
        ) : (
          <NavItem
            subItem
            key={item.title}
            item={item}
            active={current_route_name === `${item.path}/`}
            onClick={onClose}
          />
        ),
      )}
    </Stack>
  );
}
