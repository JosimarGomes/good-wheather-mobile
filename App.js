import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Content, CardItem, Text} from 'native-base';

import colors from './src/styles/colors';

import FooterMapsGoogle from './src/components/FooterMaps';
import Header from './src/components/Header';
import Dashboard from './src/components/Dashboard';
import RefreshButton from './src/components/Buttons/RefreshButton';

import WheaterService from './src/services/wheather';
import GeolocationService from './src/services/geolocation';
import GeocoderService from './src/services/geocoder';

const App = () => {
  const [loadingDashboard, setLoadingDashboard] = useState(false);
  const [loadingFooter, setLoadingFooter] = useState(false);
  const [coordinates, setCoordinates] = useState({});
  const [address, setAddress] = useState('Rua florrrrr');
  const [wheather, setWheather] = useState({});

  const requestWheather = async () => {
    try {
      setLoadingDashboard(true);
      setLoadingFooter(true);

      const {coords} = await GeolocationService.getCurrentPosition();
      setCoordinates(coords);

      const geocoder = await GeocoderService.coordsToAddress(coords);
      setAddress(geocoder[0].formattedAddress);

      // fake loading request
      setTimeout(() => {
        setLoadingFooter(false);
      }, 2000);

      WheaterService.getWheather(coords).then(res => {
        setLoadingDashboard(false);
        setWheather(res.data);
      });
    } catch (err) {
      // tratar erros
    }
  };

  useEffect(() => {
    requestWheather();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Content style={styles.content}>
        <Header />
        <CardItem header bordered>
          <Text style={styles.description}>
            {wheather.name
              ? `Clima atual na cidade de ${wheather.name}`
              : 'Verificando clima...'}
          </Text>
        </CardItem>
        <Dashboard loading={loadingDashboard} wheather={wheather} />
        {!loadingDashboard && <RefreshButton onPress={requestWheather} />}
      </Content>
      <FooterMapsGoogle
        loading={loadingFooter}
        address={address}
        coordinates={coordinates}
      />
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.defaultBackground,
  },
  card: {
    padding: 20,
  },
  description: {
    color: colors.grey,
    fontSize: 13,
  },
});

export default App;
