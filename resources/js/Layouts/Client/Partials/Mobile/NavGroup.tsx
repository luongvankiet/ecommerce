import React, { useCallback, useState } from 'react';
import NavList from './NavList';
import { Collapse, List } from '@mui/material';
import { StyledSubheader } from './styles';

interface NavGroupProps {
  subheader: string;
  items: array;
  config: object;
}

const NavGroup = ({ subheader, items, config }: NavGroupProps) => {
  const [open, setOpen] = useState(true);

  const handleToggle = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  const renderContent = items.map(list => (
    <NavList
      key={list.title + list.path}
      data={list}
      depth={1}
      hasChild={!!list.children}
      config={config}
    />
  ));

  return (
    <List disablePadding sx={{ px: 2 }}>
      {subheader ? (
        <>
          <StyledSubheader
            disableGutters
            disableSticky
            onClick={handleToggle}
            config={config}
          >
            {subheader}
          </StyledSubheader>

          <Collapse in={open}>{renderContent}</Collapse>
        </>
      ) : (
        renderContent
      )}
    </List>
  );
};

export default NavGroup;
