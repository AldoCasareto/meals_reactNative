import { View, Text } from 'react-native';
import React from 'react';
import DetailedItem from '../components/DetailedMeal';
import { MEALS } from '../data/dummy-data';

const MealDetail = ({ route }) => {
  const { mealId } = route.params;
  const mealObject = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <DetailedItem meal={mealObject} />
    </View>
  );
};

export default MealDetail;
