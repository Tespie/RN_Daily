import React from 'react';


import SettingsScreen from '../screens/SettingsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import MainStackNavigator from './MainStackNavigator';
import KhataBookScreen from '../screens/KhataBookScreen';
import AllButtonsScreen from '../screens/AllButtonsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import HomeScreen from '../screens/HomeScreen';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        // drawerContentStyle: { backgroundColor: '#30854c' }
      }}
      initialRouteName="Dashboard"
    >
      {/* <Drawer.Screen name="Dashboard" component={TabNavigator} /> */}
      {/* <Drawer.Screen name="MainStack" component={MainStackNavigator} /> */}
      <Drawer.Screen
        name="Main Dashboard"
        component={MainStackNavigator}
      // options={({ navigation }) => ({
      //   title: 'Home on Drawer - Header - and it will be shown on Top of All Other Screens',
      //   headerShown: true, // Show the header for the drawer navigator
      //   headerLeft: () => (
      //     <Icon
      //       name="menu" // Replace with your desired drawer icon
      //       size={30}
      //       onPress={() => navigation.toggleDrawer()}
      //     // style={{ marginLeft: 10 }}
      //     />
      //   ),
      // })}
      />
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      {/*<Drawer.Screen name="About Us" component={AboutUsScreen} />
      <Drawer.Screen name="KhataBook" component={KhataBookScreen} />
      <Drawer.Screen name="AllButtons" component={AllButtonsScreen} /> */}
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;
