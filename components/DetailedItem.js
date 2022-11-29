import { View, Text } from 'react-native';
import React from 'react';
import Title from './ui/Title';

const DetailedItem = ({ meal }) => {
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
    <View>
      <Title>{meal.title}</Title>
    </View>
  );
};

export default DetailedItem;
