import { FC, ReactNode } from 'react';
import Link from 'next/link';

import { MenuItem } from 'react-pro-sidebar';
import { Typography, useTheme } from '@mui/material';

interface Props {
  title: string;
  href: string;
  icon: ReactNode;
  selected: string;
  setSelected: (selected: string) => void;
}

export const SidebarItem: FC<Props> = ({ title, href, icon, selected, setSelected }) => {
  const theme = useTheme();
  return (
    // <Link href={href} passHref legacyBehavior>
    <MenuItem
      active={selected === title}
      style={{
        color: 'primary',
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
    // </Link>
  );
};
