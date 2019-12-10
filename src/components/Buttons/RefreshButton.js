import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'native-base';

export default function({onPress}) {
  return (
    <Button onPress={onPress} info rounded block style={styles.button}>
      <Text>Atualizar</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    alignSelf: 'center',
    marginTop: 50,
  },
});
