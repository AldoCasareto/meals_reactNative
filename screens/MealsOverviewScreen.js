import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList';
import { MEALS, CATEGORIES } from '../data/dummy-data';

const MealsOverview = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealsList displayedMeals={displayedMeals} navigation={navigation} route={route} />;
};

export default MealsOverview;
