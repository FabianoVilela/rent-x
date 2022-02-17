import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Container, HeaderContent, Header, TotalCars } from './styles';
import Logo from '../../assets/logo.svg';

export function Home() {
  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <HeaderContent>
        <Header>
          <Logo width={RFValue(108)} height={RFValue(12)} />
        </Header>
        <TotalCars>Total de 12 carros</TotalCars>
      </HeaderContent>
    </Container>
  );
}
