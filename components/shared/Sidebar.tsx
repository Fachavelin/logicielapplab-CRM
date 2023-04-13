import { FC, useState } from 'react';

import { Box, IconButton, Typography, colors, useTheme } from '@mui/material';
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  MenuItemStyles,
  menuClasses,
} from 'react-pro-sidebar';
import { HomeOutlined, PeopleOutline, ContactsOutlined, MenuOutlined } from '@mui/icons-material';
import { SidebarItem } from './SidebarItem';
import Image from 'next/image';

const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const Sidebar: FC = () => {
  const theme = useTheme();

  /* const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: ({ level }) => ({
      backgroundColor: level === 0 ? hexToRgba(colors.primary[400], 1) : 'transparent',
    }),

    button: {
      [`&.${menuClasses.disabled}`]: {
        color: colors.primary[500],
      },
      '&:hover': {
        backgroundColor: hexToRgba(colors.primary[400], 1),
        color: colors.greenAccent[900],
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  }; */

  const menuItemStyles: MenuItemStyles = {
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: theme.palette.primary.main,
      },
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
      },
    },
  };

  const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();
  const [selected, setSelected] = useState<string>('Dashboard');

  return (
    <Box display='flex' color={colors.grey[100]} height='100vh' sx={{ border: 0 }}>
      <ProSidebar backgroundColor={theme.palette.primary.main} style={{ border: 0 }}>
        <Menu menuItemStyles={menuItemStyles}>
          <MenuItem
            onClick={() => collapseSidebar(!collapsed)}
            icon={collapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box display='flex' justifyContent='space-between' alignItems='center' pl='15px'>
                <Typography variant='h6' color={colors.grey[100]}>
                  LOGI-CRM
                </Typography>
                <IconButton onClick={() => collapseSidebar(!collapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!collapsed && (
            <Box mb='25px'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                {/*  <img
                  alt='profile-user'
                  width='100px'
                  height='100px'
                  src={`../../assets/user.png`}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                /> */}
                <Image
                  src={`https://res.cloudinary.com/logicielapplab/image/upload/v1677460943/LogicielApplab/LOGO_NUEVO_LOGICIEL_125_efllcs.png`}
                  alt=''
                  width={100}
                  height={100}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign='center'>
                <Typography variant='body1' color={colors.grey[100]} fontWeight='bold' sx={{ m: '10px 0 0 0' }}>
                  Alexander Chávez
                </Typography>
                <Typography variant='body2' color={colors.green[100]}>
                  Super Administrador
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={collapsed ? undefined : '0%'}>
            <SidebarItem
              title='Dashboard'
              href='/'
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarItem
              title='Dashboard'
              href='/'
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarItem
              title='Dashboard'
              href='/'
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarItem
              title='Dashboard'
              href='/'
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarItem
              title='Dashboard'
              href='/'
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};
