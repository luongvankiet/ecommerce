import React, { useCallback, useState } from 'react';
import SidebarList from './SidebarList';
import { Collapse, List } from '@mui/material';
import { StyledSubheader } from './styles';

interface Props {
  subheader: string;
  items: [];
  config: object;
}

export default function SidebarGroup({ subheader, items = [], config }: Props) {
  const [open, setOpen] = useState(true);

  const handleToggle = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  const renderContent = items.map(list => (
    <SidebarList
      key={list.title + list.route}
      item={list}
      depth={1}
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
}
