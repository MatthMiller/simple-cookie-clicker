// import types

import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #80b748;
`;

export const CookiesHeader = styled.View`
  background-color: #201000;
  border: 1px solid #ffbe79;
  border-radius: 12px;
  padding: 12px;
  margin-top: 56px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const CounterText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

export const PassiveCookies = styled.Text`
  color: #d2d2d2;
  font-size: 21px;
  text-align: center;
`;

export const CookieContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Cookie = styled.Image`
  width: 260px;
  height: 260px;
`;

export const Shop = styled.View`
  border-top: 1px solid #ffbe79;
  background-color: #201000;
  padding: 16px 15px;
  gap: 16px;
`;

export const ShopItem = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 4px;
  border: 1px solid #ffbe79;
  background-color: #dc8931;
`;

export const Price = styled.View`
  background-color: #ffbe79;
  padding: 14px 0px;
  width: 64px;
  flex-direction: row;
  justify-content: center;
`;

export const PriceText = styled.Text`
  color: #110900;
  font-weight: 800;
  font-size: 16px;
`;

export const Description = styled.Text`
  flex: 1;
  align-self: center;
  color: #110900;
  text-align: center;
  font-weight: 800;
  font-size: 16px;
`;

export const Fabricas = styled.Text`
  font-size: 14px;
  color: #fff;
  font-style: italic;
`;
