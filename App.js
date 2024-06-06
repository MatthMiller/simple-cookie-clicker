import React from 'react';
import { Pressable } from 'react-native';
import {
  Container,
  Cookie,
  CookieContainer,
  CookiesHeader,
  CounterText,
  Description,
  Fabricas,
  PassiveCookies,
  Price,
  PriceText,
  Shop,
  ShopItem,
} from './Screens/Home/styles';

export default function App() {
  const [cookies, setCookies] = React.useState(0);
  const [touchMultiplier, setTouchMultiplier] = React.useState(1);
  const [passiveCookies, setPassiveCookies] = React.useState(0);
  const [fabricas, setFabricas] = React.useState(0);

  const COOKIES_FABRICA = 3;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCookies((previousCookies) =>
        Math.round(previousCookies + passiveCookies)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [passiveCookies]);

  const buyTouchUpgrade = () => {
    if (cookies >= 5) {
      setTouchMultiplier((x) => x + x * 0.1);
      setCookies((previousCookies) => previousCookies - 5);
    }
  };

  const buyFabrica = () => {
    if (cookies >= 10) {
      setFabricas((x) => x + 1);
      setCookies((previousCookies) => previousCookies - 10);
      setPassiveCookies((x) => x + COOKIES_FABRICA);
    }
  };

  return (
    <Container>
      <CookiesHeader>
        <CounterText>{cookies} cookies</CounterText>
        <PassiveCookies>{passiveCookies} PC/s</PassiveCookies>
      </CookiesHeader>
      <CookieContainer>
        <Pressable
          onPress={() =>
            setCookies((previousCookies) =>
              Math.round(previousCookies + 1 * touchMultiplier)
            )
          }
        >
          <Cookie source={require('./assets/cookie.webp')} />
        </Pressable>
      </CookieContainer>
      <Shop>
        <ShopItem onPress={buyTouchUpgrade} activeOpacity={0.7}>
          <Price>
            <PriceText>5 🍪</PriceText>
          </Price>
          <Description>Aprimorar touch</Description>
        </ShopItem>
        <ShopItem onPress={buyFabrica} activeOpacity={0.7}>
          <Price>
            <PriceText>10 🍪</PriceText>
          </Price>
          <Description>Comprar fábrica</Description>
        </ShopItem>
        <Fabricas>Total de fábricas: {fabricas}</Fabricas>
      </Shop>
    </Container>
  );
}
