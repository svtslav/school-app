import React, { FC } from 'react';

import { HeaderStyled } from './styles';
import { HeaderProps } from './interfaces';

export const Header: FC<HeaderProps> = (props) => {
  const { children, className } = props;
  return (
    <HeaderStyled className={className}>
      {children}
    </HeaderStyled>
  );
}
