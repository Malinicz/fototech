import React from 'react';
import styled from 'styles';
import { BlockLink } from '../components/ui/base/LinkWrappers';

const NotFoundPageHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.h1`
  margin-top: 100px;
  text-align: center;
`;

export default () => (
  <NotFoundPageHolder>
    <Info>Przepraszamy, ta strona jest jeszcze w budowie :(</Info>
    <BlockLink href="http://www.fotonaprawa.pl">
      Powrót na stronę główną
    </BlockLink>
  </NotFoundPageHolder>
);
