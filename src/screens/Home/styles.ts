import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
// import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const HeaderContent = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.background_header};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px;
`;

export const Header = styled.View`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  justify-content: flex-end;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
