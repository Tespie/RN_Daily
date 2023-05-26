import React from 'react';


import SettingsScreen from '../screens/SettingsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import KhataBookScreen from '../screens/KhataBookScreen';
import ChatGptScreen from '../screens/ChatGptScreen';
// import HomeScreen from '../screens/HomeScreen';


const Stack = createStackNavigator();


const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
    // screenOptions={{
    //   StackBarIcon: () => null,
    //   StackBarLabelPosition: 'beside-icon',
    //   StackBarInactiveTintColor: 'black',
    //   headerBackgroundContainerStyle: {backgroundColor: 'green'},
    // }}
    >

      {/* <Stack.Screen name="Home" options={{}} component={HomeScreen} /> */}
      {/* <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Settingss" component={SettingsScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="About Us" component={AboutUsScreen} /> */}
      <Stack.Screen name="KhataBook" options={{
        title: 'રસીદ પોથી',
        headerStyle: {
          backgroundColor: '#f4511e',
          // backgroundColor: 'darkpink',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} component={KhataBookScreen} />
      {/* <Stack.Screen name="ChatGptScreen" component={ChatGptScreen} /> */}
    </Stack.Navigator>
  )
}

const screenOptionStyle = {
  headerShown: true,
  // headerStyle: {
  //   backgroundColor: "#9AC4F8",
  // },
  // headerTintColor: "white",
  // headerBackTitle: "Back",

};


export default MainStackNavigator;
