import React, { FC } from 'react';

import { WrapperStyled } from './styles';
import { WrapperProps } from './interfaces';

export const Wrapper: FC<WrapperProps> = (props) => {
  const { children, className } = props;
  return (
    <WrapperStyled className={className}>
      {children}
    </WrapperStyled>
  );
}
