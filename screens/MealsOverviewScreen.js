import { MEALS, CATEGORIES } from '../data/dummy-data';
import { View, StyleSheet, FlatList } from 'react-native';
import React, { useLayoutEffect } from 'react';
import MealItem from '../components/MealItem';

const MealsOverview = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  const renderMealItem = ({ item }) => {
    const mealDetailHandler = () => {
      navigation.navigate('MealDetail', {
        mealId: item.id,
      });
    };
    return (
      <>
        <MealItem item={item} onPress={mealDetailHandler} />
      </>
    );
  };

  return (
    <View style={styles.mealsContainer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  mealsContainer: {
    flex: 1,
    padding: 16,
  },
});
