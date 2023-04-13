import { FC, ReactNode, useReducer } from 'react';
import { ColorModeContext } from './';

interface Props {
  children: ReactNode;
  value: any;
}

export const ColorModeProvider: FC<Props> = ({ children, value }) => {
  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
};
