import { View, Text, Button } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import DetailedItem from '../components/DetailedMeal';
import { MEALS } from '../data/dummy-data';
import IconButton from '../components/ui/IconButton';

const MealDetail = ({ route, navigation }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const { mealId } = route.params;
  const mealObject = MEALS.find((meal) => meal.id === mealId);

  const headerButtonHandler = () => {
    setBookmarked(!bookmarked);
  };

  console.log(`bookmarked = `, bookmarked);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButton icon='star' color='white' onPress={headerButtonHandler} />,
    });
  }, [navigation, headerButtonHandler]);

  return (
    <View>
      <DetailedItem meal={mealObject} />
    </View>
  );
};

export default MealDetail;
