import { PaletteMode, createTheme } from '@mui/material';
import { amber, blue, deepOrange, grey, indigo, red, green } from '@mui/material/colors';
import { createContext, useMemo, useState } from 'react';

export const getDesignTokens = (mode: PaletteMode) => {
  return {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              light: indigo[400],
              main: indigo[500],
              dark: indigo[600],
              contrastText: '#fff',
            },
            secondary: {
              light: '#ff7961',
              main: '#f44336',
              dark: '#ba000d',
              contrastText: '#000',
            },
            background: {
              default: grey[50],
              paper: grey[100],
            },
          }
        : {
            primary: {
              light: indigo[400],
              main: indigo[500],
              dark: indigo[600],
              contrastText: '#fff',
            },
            secondary: {
              light: '#ff7961',
              main: '#f44336',
              dark: '#ba000d',
              contrastText: '#000',
            },
            background: {
              default: '#141b2d',
              paper: '#1F2A40',
            },
          }),
    },
  };
};
