import React from 'react';
import {StyleSheet} from 'react-native';
import {Col, Row, Icon, View} from 'native-base';
import Spinner from 'react-native-spinkit';

import colors from '../../styles/colors';

import CardInfo from './CardInfo';
export default function(props) {
  const {wheather, loading} = props;

  if (loading) {
    return (
      <View style={styles.contentCenter}>
        <Spinner
          isVisible={loading}
          size={40}
          type="Circle"
          style={{color: colors.primary}}
        />
      </View>
    );
  }

  const {main = {}, wind = {}} = wheather;

  function splitFloatValue(floatValue = '') {
    const splitedValue = floatValue.toString().split('.');

    return {
      integer: splitedValue[0],
      decimal: splitedValue[1],
    };
  }

  const actualTemperature = splitFloatValue(main.temp);
  const maxTemperature = splitFloatValue(main.temp_max);
  const minTemperature = splitFloatValue(main.temp_min);
  const windParsed = splitFloatValue(wind.speed);
  const humidityParse = splitFloatValue(main.humidity);

  return (
    <Col>
      <CardInfo
        label="temperatura atual"
        subValue={actualTemperature.decimal}
        value={actualTemperature.integer}
        separator=","
        suffix=" °C"
        valueStyle={[styles.bigFont, styles.defaultFont]}
        cardStyle={styles.bigCard}
      />
      <Row>
        <Col>
          <Row>
            <CardInfo
              label="máxima"
              subValue={maxTemperature.decimal}
              value={maxTemperature.integer}
              separator=","
              suffix="°"
              preffix={<Icon name="arrow-up" style={styles.mediumFont} />}
              cardStyle={styles.maxColor}
            />
            <CardInfo
              label="mínima"
              subValue={minTemperature.decimal}
              value={minTemperature.integer}
              separator=","
              suffix="°"
              preffix={<Icon name="arrow-down" style={styles.mediumFont} />}
              cardStyle={styles.minColor}
            />
          </Row>
        </Col>
      </Row>
      <Col>
        <Row>
          <CardInfo
            label="vento"
            subValue={windParsed.decimal}
            value={windParsed.integer}
            separator=","
            suffix="km"
            cardStyle={styles.windColor}
          />
          <CardInfo
            label="Umidade"
            subValue={humidityParse.decimal}
            value={humidityParse.integer}
            suffix="%"
            cardStyle={styles.humidityColor}
          />
        </Row>
      </Col>
    </Col>
  );
}

const styles = StyleSheet.create({
  contentCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  bigFont: {
    fontSize: 30,
  },
  mediumFont: {
    fontSize: 16,
  },
  defaultFont: {
    color: colors.darkGrey,
  },
  maxColor: {
    backgroundColor: colors.primaryLight,
  },
  minColor: {
    backgroundColor: colors.primaryLight,
  },
  windColor: {
    backgroundColor: colors.primaryLight,
  },
  humidityColor: {
    backgroundColor: colors.primaryLight,
  },
  bigCard: {
    backgroundColor: colors.success,
  },
});
