import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import BottomTabNavigation from './TabNavigation';

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={BottomTabNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
