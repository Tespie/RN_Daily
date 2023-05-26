import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Text, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';
// import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// function HomeScreenn() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreennn() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

const AppRouter = () => {
  return (
    <NavigationContainer>

      {/* <TabNavigator /> */}
      <DrawerNavigator />

    </NavigationContainer>
  );
};

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Dashboard">
//         <Drawer.Screen name="Dashboard" component={DashboardScreen} />
//         <Drawer.Screen name="Settings" component={SettingsScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//         <Drawer.Screen name="About Us" component={AboutUsScreen} />
//       </Drawer.Navigator>
//   )
// }

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//         screenOptions={{
//           tabBarIcon: () => null,
//           tabBarLabelPosition: 'beside-icon',
//           tabBarInactiveTintColor: 'black',
//           headerBackgroundContainerStyle: {backgroundColor: 'green'},
//         }}>
        
//         {/* <Tab.Screen name="Home" options={{}} component={HomeScreen} /> */}
//         <Tab.Screen name="Dashboard" component={DashboardScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//         <Tab.Screen name="Notifications" component={NotificationsScreen} />
//         <Tab.Screen name="About Us" component={AboutUsScreen} />
//       </Tab.Navigator>
//   )
// }

export default AppRouter;
