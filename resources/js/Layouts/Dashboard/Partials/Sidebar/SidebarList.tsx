import React from 'react';
import { useCallback, useEffect, useState, useMemo } from 'react';
import { Collapse } from '@mui/material';
import SidebarItem from './SidebarItem';
import { usePage } from '@inertiajs/react';

interface SidebarListProps {
  item: unknown;
  config: object;
  depth: number;
}

const SidebarList = ({ item, depth, config }: SidebarListProps) => {
  const { current_route_name } = usePage().props;

  const active = useMemo(
    () =>
      item.path === current_route_name ||
      item.children?.some(
        subItem =>
          subItem.path === current_route_name ||
          subItem.children?.some(i => i.path === current_route_name),
      ) ||
      false,
    [current_route_name],
  );

  const externalLink = item.path?.includes('http');

  const [open, setOpen] = useState(active);

  const handleToggle = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!active) {
      handleClose();
    }
  }, [current_route_name]);

  return (
    <>
      <SidebarItem
        item={item}
        depth={depth}
        open={open}
        active={active}
        externalLink={externalLink}
        onClick={handleToggle}
        config={config}
      />

      {item.children?.length > 0 &&
        item.children?.filter(i => !i.hidden).length > 0 && (
          <Collapse in={open} unmountOnExit>
            {item.children?.map((child, childIndex) => (
              <SidebarList
                key={`child${child.name}${child.action}${childIndex}`}
                item={child}
                depth={depth + 1}
                config={config}
              />
            ))}
          </Collapse>
        )}
    </>
  );
};

export default SidebarList;
