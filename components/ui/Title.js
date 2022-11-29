import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Title = ({ children, styleText }) => {
  return (
    <View>
      <Text style={[styles.title, { color: styleText }]}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
    fontWeight: 'bold',
  },
});
