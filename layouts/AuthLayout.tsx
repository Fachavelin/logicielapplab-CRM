import { FC, ReactNode, useContext } from 'react';
import Head from 'next/head';
import { Box, IconButton, useTheme } from '@mui/material';
import { ColorModeContext } from '@/context';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

interface Props {
  title?: string;
  children?: ReactNode;
}

const AuthLayout: FC<Props> = ({ title = '', children }) => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <>
      <Head>
        <title title={title} />
      </Head>
      <main>
        <Box display='flex' justifyContent='flex-end' p={2}>
          <IconButton sx={{ transition: '' }} onClick={() => toggleColorMode()}>
            {theme.palette.mode === 'dark' ? <DarkModeOutlined /> : <LightModeOutlined />}
          </IconButton>
        </Box>
        <Box display={'flex'} justifyContent='center' alignItems={'center'} minHeight={'70vh'} mb={10}>
          {children}
        </Box>
      </main>
    </>
  );
};

export default AuthLayout;
