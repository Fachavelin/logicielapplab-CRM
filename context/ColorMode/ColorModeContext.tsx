import { createContext } from 'react';

interface ContextProps {
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext({} as ContextProps);
