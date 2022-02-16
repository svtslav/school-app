import React from 'react';

import { Page } from '../layouts/page';
import { Main } from '../layouts/main';
import { Header } from '../layouts/header';
import { Footer } from '../layouts/footer';
import { Wrapper } from '../layouts/wrapper';

const MainPage = () => {
  return (
    <Page>
      <Header>
        <Wrapper>
          МБОУ «Лицей им. И.И. Иванова»
        </Wrapper>
      </Header>
      <Main>
        <Wrapper>
          Главная страница
        </Wrapper>
      </Main>
      <Footer>
        <Wrapper>
          Разработано в 2022 году
        </Wrapper>
      </Footer>
    </Page>
  );
}

export default MainPage;
