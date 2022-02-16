import React, { FC } from 'react';

import { FooterStyled } from './styles';
import { FooterProps } from './interfaces';

export const Footer: FC<FooterProps> = (props) => {
  const { children, className } = props;
  return (
    <FooterStyled className={className}>
      {children}
    </FooterStyled>
  );
}
