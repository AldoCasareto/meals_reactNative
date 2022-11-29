import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
    // width: 300,
    // maxWidth: '80%',
    fontWeight: 'bold',
  },
});
