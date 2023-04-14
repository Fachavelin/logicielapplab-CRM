import { FC } from 'react';

import { Box, Typography, useTheme } from '@mui/material';

interface Props {
  title: string;
  subtitle: string;
}

export const Header: FC<Props> = ({ title = '', subtitle = '' }) => {
  const theme = useTheme();

  return (
    <Box mt='5px' mb='30px'>
      <Typography variant='h5' fontWeight='bold'>
        {title}
      </Typography>
      <Typography color={theme.palette.mode === 'light' ? 'primary.dark' : 'primary.light'} variant='subtitle1'>
        {subtitle}
      </Typography>
    </Box>
  );
};
