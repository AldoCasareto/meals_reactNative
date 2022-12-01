import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import MealItem from './MealItem';

const MealsList = ({ displayedMeals, navigation }) => {
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

export default MealsList;

const styles = StyleSheet.create({
  mealsContainer: {
    flex: 1,
    padding: 16,
  },
});
