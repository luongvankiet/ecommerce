import React from 'react';
import { m } from 'framer-motion';
import { forwardRef } from 'react';
// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import CardActionArea from '@mui/material/CardActionArea';
import { ListItem } from './styles';
import { Iconify } from '@/Components/Icons';
import RouterLink from '@/Components/RouterLink';
import { route } from 'ziggy-js';
import { CssBaselineProps } from '@mui/material';

// ----------------------------------------------------------------------

interface NavItemProps {
  active: bool;
  externalLink: bool;
  item: object;
  offsetTop: bool;
  open: bool;
  subItem: bool;
}

export const NavItem = forwardRef(function NavItem(
  {
    item,
    open,
    offsetTop,
    active,
    subItem,
    externalLink,
    ...other
  }: NavItemProps,
  ref,
) {
  const { title, path, children } = item;

  const renderContent = (
    <ListItem
      ref={ref}
      disableRipple
      offsetTop={offsetTop}
      subItem={subItem}
      active={active}
      open={open}
      {...other}
    >
      {title}

      {!!children && (
        <Iconify width={16} icon="eva:arrow-ios-downward-fill" sx={{ ml: 1 }} />
      )}
    </ListItem>
  );

  // External link
  if (externalLink) {
    return (
      <Link href={path} target="_blank" rel="noopener" underline="none">
        {renderContent}
      </Link>
    );
  }

  // Has child
  if (children) {
    return renderContent;
  }

  // Default
  return (
    <Link component={RouterLink} href={route(path)} underline="none">
      {renderContent}
    </Link>
  );
});

// ----------------------------------------------------------------------

interface NavItemDashboardProps {
  item: object;
  sx: CssBaselineProps;
}

export function NavItemDashboard({
  item,
  sx,
  ...other
}: NavItemDashboardProps) {
  return (
    <Link component={RouterLink} href={item.path} sx={{ width: 1 }} {...other}>
      <CardActionArea
        sx={{
          py: 5,
          px: 10,
          minHeight: 400,
          borderRadius: 1.5,
          color: 'text.disabled',
          bgcolor: 'background.neutral',

          ...sx,
        }}
      >
        <m.div
          whileTap="tap"
          whileHover="hover"
          variants={{
            hover: { scale: 1.02 },
            tap: { scale: 0.98 },
          }}
        >
          <Box
            component="img"
            alt="illustration_dashboard"
            src="/assets/illustrations/illustration_dashboard.png"
          />
        </m.div>
      </CardActionArea>
    </Link>
  );
}
