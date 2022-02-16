import styled from 'styled-components';

export const PageStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f1;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    /** Фикс для Safari в мобильных браузерах */
    min-height: -webkit-fill-available;
  }
`;