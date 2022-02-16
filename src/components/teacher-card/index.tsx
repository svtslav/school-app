import React, { FC } from 'react';

import { TeacherCardStyled, TeacherPhotoStyled } from './styles';
import { TeacherCardProps } from './interfaces';

export const TeacherCard: FC<TeacherCardProps> = (props) => {
  const { fullName, photoUrl = 'https://i0.wp.com/www.un.org/pga/71/wp-content/uploads/sites/40/2013/11/2000px-Placeholder_no_text.svg_.png?resize=768%2C768&ssl=1', className } = props;
  return (
    <TeacherCardStyled className={className}>
      <TeacherPhotoStyled src={photoUrl} alt={fullName} />
      <h2>{fullName}</h2>
    </TeacherCardStyled>
  );
}
