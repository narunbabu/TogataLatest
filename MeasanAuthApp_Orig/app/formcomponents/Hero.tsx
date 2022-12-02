import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo2.png')} />
      <Text style={styles.paragraph}>తొగట వీర క్షత్రియ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
  },
  logo: {
    width: '100%',
    height: 200,
  },
});
