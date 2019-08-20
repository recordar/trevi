import * as React from 'react';

import useThemeState from '../hook/useThemeState';

const ThemeState = () => {
  const {
    width,// updateWidth,
    height,// updateHeight,
    background,// updateBackground
  } = useThemeState();

  return <div style={{
    width, height, background
  }} />
}

export default ThemeState;
