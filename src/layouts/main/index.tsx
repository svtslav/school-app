import React, { FC } from 'react';

import { MainStyled } from './styles';
import { MainProps } from './interfaces';

export const Main: FC<MainProps> = (props) => {
  const { children, className } = props;
  return (
    <MainStyled className={className}>
      {children}
    </MainStyled>
  );
}
