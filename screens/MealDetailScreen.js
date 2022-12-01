import { View, Text, Button } from 'react-native';
import React, { useContext, useLayoutEffect, useState } from 'react';
import DetailedItem from '../components/DetailedMeal';
import { MEALS } from '../data/dummy-data';
import IconButton from '../components/ui/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

const MealDetail = ({ route, navigation }) => {
  const { mealId } = route.params;
  const mealObject = MEALS.find((meal) => meal.id === mealId);

  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  const changeFavoriteHandler = () => {
    if (mealIsFavorite) {
      console.log('remove');
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      console.log('add');
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          color='white'
          onPress={changeFavoriteHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteHandler]);

  return (
    <View>
      <DetailedItem meal={mealObject} />
    </View>
  );
};

export default MealDetail;
