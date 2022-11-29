import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Title from './ui/Title';

const DetailedMeal = ({ meal, style }) => {
  const {
    title,
    affordability,
    categoryIds,
    id,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = meal;

  return (
    <ScrollView>
      <View style={styles.listContainer}>
        <Title styleText='white'>{title}</Title>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.extraInfo}>{duration}</Text>
        <Text style={styles.extraInfo}>{complexity}</Text>
        <Text style={styles.extraInfo}>{affordability}</Text>
        <View>
          {/* <FlatList
          data={ingredients}
          numColumns={2}
          keyExtractor={(ingredients) => ingredients}
          renderItem={({ item }) => <Text>{item}</Text>}
        /> */}

          <Text style={styles.subtitle}>Ingredients</Text>
          {ingredients.map((ingredient, index) => (
            <View style={styles.listItems}>
              <Text style={styles.extraInfo} key={index}>
                {ingredient}
              </Text>
            </View>
          ))}
          <Text style={styles.subtitle}>Steps</Text>
          {steps.map((steps, index) => (
            <View style={styles.listItems}>
              <Text style={styles.extraInfo} key={index}>
                {index + 1}. {steps}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailedMeal;

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: '100%',
  },
  extraInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
    color: 'white',
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
    padding: 6,
  },
  listItems: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
