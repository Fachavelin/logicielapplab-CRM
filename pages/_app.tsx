import type { AppProps } from 'next/app';
import { ColorModeProvider } from '@/context';
import { useMode } from '@/hooks/useMode';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { ProSidebarProvider } from 'react-pro-sidebar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeProvider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeProvider>
  );
}
