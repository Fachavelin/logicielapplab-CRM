import { useMemo, useState } from 'react';
import { getDesignTokens } from '@/themes';

import { PaletteMode, createTheme } from '@mui/material';

//?Extrated from oficial documentation
export const useMode = () => {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  const theme: any = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return [theme, colorMode];
};
