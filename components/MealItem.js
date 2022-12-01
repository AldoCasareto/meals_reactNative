import { View, Text, Image, StyleSheet, Pressable, Platform } from 'react-native';
import React from 'react';
import Title from './ui/Title';

const MealItem = ({ item, onPress }) => {
  const { title, affordability, complexity, imageUrl, duration } = item;

  console.log(item);

  // const navigation = useNavigation();

  // const onPress = () => {
  //   navigation.navigate('MealDetail', {
  //     mealId: id,
  //   });
  // };

  return (
    <View style={styles.cardContainer}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => pressed && styles.pressedButton}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Title>{title}</Title>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: imageUrl }} />
            </View>
          </View>
          <View style={styles.extraInfo}>
            <Text style={styles.extraInfoItem}>{duration} min</Text>
            <Text style={styles.extraInfoItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.extraInfoItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.45,
    overflow: Platform.OS === 'android' ? 'hidden' : '',
  },
  innerContainer: {
    borderRadius: 8,
  },
  imageContainer: {},
  image: {
    height: 200,
    width: '100%',
  },
  extraInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  extraInfoItem: {
    marginHorizontal: 3,
    fontSize: 12,
  },
  pressedButton: { opacity: 0.75 },
});
