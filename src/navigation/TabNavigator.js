import React from 'react';


import SettingsScreen from '../screens/SettingsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainStackNavigator from './MainStackNavigator';
// import HomeScreen from '../screens/HomeScreen';


const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
          headerShown : false,
          tabBarIcon: () => null,
          tabBarLabelPosition: 'beside-icon',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor : 'blue',
          headerStyle: {backgroundColor: 'green'},
        }}>
        
        {/* <Tab.Screen name="Home" options={{}} component={HomeScreen} /> */}
        <Tab.Screen name="Dashboard" component={MainStackNavigator} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="About Us" component={AboutUsScreen} />
      </Tab.Navigator>
  )
}


export default TabNavigator;
