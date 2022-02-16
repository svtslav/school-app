import React, { FC } from 'react';

import { PageStyled } from './styles';
import { PageProps } from './interfaces';

export const Page: FC<PageProps> = (props) => {
  const { children, className } = props;
  return (
    <PageStyled className={className}>
      {children}
    </PageStyled>
  );
}
