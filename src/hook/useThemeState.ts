import {useState} from 'react';

export interface IThemeState {
  width: string;
  height: string;
  background: string;
  updateWidth: (width: string) => void;
  updateHeight: (height: string) => void;
  updateBackground: (background: string) => void;
};

const useThemeState = (): IThemeState => {
  const [width, setWidth] = useState<string>('10px');
  const [height, setHeight] = useState<string>('10px');
  const [background, setBackground] = useState<string>('black');

  const updateWidth = (width: string) => {
    setWidth(width);
  };

  const updateHeight = (height: string) => {
    setHeight(height);
  };

  const updateBackground = (background: string) => {
    setBackground(background);
  };

  return {
    width, updateWidth,
    height, updateHeight,
    background, updateBackground
  };
}

export default useThemeState;
