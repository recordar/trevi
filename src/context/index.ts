import { createContext } from 'react';

import { INameState } from '../hook/useNameState';
import { IThemeState } from '../hook/useThemeState';

export const AppContext = createContext<{
  name?: INameState;
  themeState?: IThemeState;
}>({});
