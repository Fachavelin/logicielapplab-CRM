import { FC, useContext } from 'react';
import { ColorModeContext } from '@/context/ColorMode';

import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationAdd,
  SettingsOutlined,
  PersonOutline,
  Search,
  Settings,
} from '@mui/icons-material';

export const Topbar: FC = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <Box display='flex' justifyContent={'space-between'} p={2}>
      {/* SearchBar */}
      <Box display='flex' borderRadius='3px' sx={{ backgroundColor: theme.palette.background.paper }}>
        <InputBase sx={{ ml: 2, flex: 1, px: '10px' }} placeholder='Buscar' />
        <IconButton type='button' sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>
      {/* Icons */}
      <Box display='flex'>
        <IconButton sx={{ transition: '' }} onClick={() => toggleColorMode()}>
          {theme.palette.mode === 'dark' ? <DarkModeOutlined /> : <LightModeOutlined />}
        </IconButton>
        <IconButton>
          <NotificationAdd />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutline />
        </IconButton>
      </Box>
    </Box>
  );
};
