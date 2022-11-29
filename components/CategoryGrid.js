import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import React from 'react';

const CategoryGrid = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [styles.button, pressed ? styles.pressedButton : null]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : '',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flex: 1,
    elevation: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  button: {
    flex: 1,
  },
  pressedButton: {
    opacity: 0.75,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
