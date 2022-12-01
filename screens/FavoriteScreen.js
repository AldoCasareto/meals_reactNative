import React, { useContext } from 'react';
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList';
import { FavoritesContext } from '../store/context/favorites-context';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const FavoriteScreen = ({ navigation }) => {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((favs) => favoriteMealsCtx.ids.includes(favs.id));

  // const favoriteMeals = useSelector((state) => state.favoriteMeals.ids);

  console.log(favoriteMeals);

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No Favorites yet...!</Text>
      </View>
    );
  }

  return <MealsList navigation={navigation} displayedMeals={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
