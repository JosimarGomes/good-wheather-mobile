import React from 'react';
import {StyleSheet, Dimensions, Animated} from 'react-native';
import Interactable from 'react-native-interactable';
import {CardItem, Footer, View, Icon, Text, Col} from 'native-base';
import MapView, {Marker} from 'react-native-maps';
import Spinner from 'react-native-spinkit';

import colors from '../../styles/colors';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 15,
};

export default function({coordinates, address, loading}) {
  return (
    <View style={styles.panelContainer}>
      <Interactable.View
        verticalOnly={true}
        snapPoints={[{y: Screen.height - 80}, {y: Screen.height / 2}, {y: 20}]}
        // boundaries={{top: -300}}
        initialPosition={{y: Screen.height - 80}}
        animatedValueY={new Animated.Value(Screen.height - 100)}>
        <Footer style={styles.footer}>
          {loading ? (
            <Spinner
              isVisible={loading}
              size={40}
              type="Circle"
              style={{color: colors.primaryLight}}
            />
          ) : (
            <Col>
              <CardItem style={styles.card}>
                <Icon name="locate" style={{color: colors.primaryLight}} />
                <Text style={styles.address}>{address}</Text>
              </CardItem>
            </Col>
          )}
        </Footer>
        <View style={{height: Screen.height}}>
          {coordinates.latitude && (
            <MapView
              style={styles.mapview}
              loadingEnabled={true}
              region={{
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
                latitudeDelta: 0.0043,
                longitudeDelta: 0.0034,
              }}>
              <Marker
                coordinate={coordinates}
                title={'Você'}
                // description={marker.description}
              />
            </MapView>
          )}
        </View>
      </Interactable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  footer: {
    backgroundColor: colors.primary,
  },
  card: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  address: {
    color: colors.primaryLight,
    fontSize: 13,
  },
  mapview: {
    height: 500,
    backgroundColor: 'orange',
  },
});
