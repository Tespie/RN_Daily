import React from 'react';


import SettingsScreen from '../screens/SettingsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import MainStackNavigator from './MainStackNavigator';
// import HomeScreen from '../screens/HomeScreen';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
    screenOptions={{
      headerShown : false
      }} 
      // initialRouteName="Dashboard"
      >
        {/* <Drawer.Screen name="Dashboard" component={TabNavigator} /> */}
        <Drawer.Screen name="MainStack" component={MainStackNavigator} />
        {/* <Drawer.Screen name="Dashboard" component={DashboardScreen} /> */}
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="About Us" component={AboutUsScreen} />
      </Drawer.Navigator>
  )
}

export default DrawerNavigator;
