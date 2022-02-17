import React from 'react';

import {
  About,
  Brand,
  CarImage,
  Container,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type
} from './style';
import GasolineSvg from '../../assets/gasoline.svg';

export function Car() {
  return (
    <Container>
      <Details>
        <Brand>AUDI</Brand>
        <Name>RS 5 Coupé</Name>
        <About>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 120,00</Price>
          </Rent>
          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: 'https://w7.pngwing.com/pngs/329/794/png-transparent-2018-audi-rs-5-2014-audi-rs-5-car-audi-rs-6-car-sedan-performance-car-automatic-transmission.png'
        }}
      />
    </Container>
  );
}
