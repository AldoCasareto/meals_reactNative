import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetail from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Categories'
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => <Ionicons size={size} color={color} name='list' />,
        }}
        component={CategoriesScreen}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoriteScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => <Ionicons size={size} color={color} name='star' />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        {/* <Provider store={store}> */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#351401' },
            }}
          >
            <Stack.Screen
              options={{ headerShown: false }}
              name='Drawer'
              component={DrawerNavigator}
            />
            <Stack.Screen
              name='MealsOverview'
              // options={({ route, navigation }) => {
              //   const { categoryId } = route.params;
              //   return {
              //     title: categoryId,
              //   };
              // }}
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name='MealDetail'
              component={MealDetail}
              // options={{ headerRight: () => <Text>In the header</Text> }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </Provider> */}
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
