import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data.js';
import CategoryGrid from '../components/CategoryGrid.js';

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: item.id,
      });
    };
    return <CategoryGrid title={item.title} color={item.color} onPress={pressHandler} />;
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
