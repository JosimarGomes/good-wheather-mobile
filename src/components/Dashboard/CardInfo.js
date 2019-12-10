import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardItem, Text} from 'native-base';

const CardInfo = ({
  label,
  value,
  subValue,
  separator,
  suffix,
  valueStyle,
  cardStyle,
  preffix,
}) => {
  return (
    <Card style={[styles.card, cardStyle]}>
      <CardItem style={styles.cardItem}>
        <Text style={styles.label}>{label}</Text>
        <Text style={[valueStyle]}>
          {preffix}
          {value}
          <Text style={[valueStyle, styles.subValue]}>
            {separator}
            {subValue}
            {suffix}
          </Text>
        </Text>
      </CardItem>
    </Card>
  );
};

export default CardInfo;

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  cardItem: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: 11,
  },
  subValue: {
    fontSize: 12,
  },
});
