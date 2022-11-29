import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';
import MealDetail from './screens/MealDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#351401' },
          }}
        >
          <Stack.Screen
            options={{
              title: 'All Categories',
            }}
            name='MealsCategories'
            component={CategoriesScreen}
          />
          <Stack.Screen
            name='MealsOverview'
            // options={({ route, navigation }) => {
            //   const { categoryId } = route.params;
            //   return {
            //     title: categoryId,
            //   };
            // }}
            component={MealsOverview}
          />
          <Stack.Screen name='MealDetail' component={MealDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
