import React from 'react';
import {Header, Title, Icon} from 'native-base';
import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

export default function(props) {
  return (
    <Header style={styles.header}>
      <Icon name="globe" type="Ionicons" style={styles.icon} />
      <Title style={styles.title}>Good Wheather</Title>
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
  },
  icon: {
    color: colors.primary,
    marginRight: 15,
  },
  title: {
    color: colors.primary,
  },
});
