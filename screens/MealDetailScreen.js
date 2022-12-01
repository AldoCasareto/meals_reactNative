import { View, Text, Button } from 'react-native';
import React, { useContext, useLayoutEffect, useState } from 'react';
import DetailedItem from '../components/DetailedMeal';
import { MEALS } from '../data/dummy-data';
import IconButton from '../components/ui/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

const MealDetail = ({ route, navigation }) => {
  const { mealId } = route.params;
  const mealObject = MEALS.find((meal) => meal.id === mealId);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const dispatch = useDispatch();

  // const favoriteMealsCtx = useContext(FavoritesContext);

  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  // const changeFavoriteHandler = () => {
  //   if (mealIsFavorite) {
  //     console.log('remove');
  //     favoriteMealsCtx.removeFavorite(mealId);
  //   } else {
  //     console.log('add');
  //     favoriteMealsCtx.addFavorite(mealId);
  //   }
  // };

  const changeFavoriteHandler = () => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
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
