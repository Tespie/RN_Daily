import React from 'react';

import { View, Text, Button } from 'react-native';


import SettingsScreen from '../screens/SettingsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import KhataBookScreen from '../screens/KhataBookScreen';
import ChatGptScreen from '../screens/ChatGptScreen';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import AllButtonsScreen from '../screens/AllButtonsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReduxCounterScreen from '../screens/ReduxCounterScreen';

// import HomeScreen from '../screens/HomeScreen';


const HomeScreenWithHeader = ({ navigation }) => {
  return (
    <HomeScreen
      navigation={navigation}
      options={{
        headerLeft: () => (
          <Ionicons
            name="menu"
            size={30}
            color="black"
            style={{ marginLeft: 10 }}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }}
    />
  );
};

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();


const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      // screenOptions={screenOptionStyle}
      screenOptions={{
        headerShown: true,
        // headerBackTitle: 'pi6e',
        headerBackTitleVisible: false
        // StackBarIcon: () => null,
        // StackBarLabelPosition: 'beside-icon',
        // StackBarInactiveTintColor: 'black',
        // headerBackgroundContainerStyle: {backgroundColor: 'green'},
      }}
    >

      <Stack.Screen name="Home"
        // component={HomeScreen}
        component={HomeScreenWithHeader}
        options={{
          // headerShown: false,
          title: 'HOME aka DASHBOARD',
          // headerLeft: null,
          headerLeft: () => (
            <Icon
              name="menu" // Replace with your desired drawer icon
              // name="wifi" // Replace with your desired drawer icon
              size={25}
              // color={'red'}
              color='black'
              onPress={() => navigation.toggleDrawer()}
              style={{
                // backgroundColor: 'red',
                marginRight: 25,
                // marginLeft: 10
                // padding: 5
                // margin: 10
              }}
            />
          ),

        }}
      />
      <Stack.Screen name="AllButtons" component={AllButtonsScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="KhataBook" component={KhataBookScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      {/*   <Stack.Screen name="Settingss" component={SettingsScreen} />
        <Stack.Screen name="About Us" component={AboutUsScreen} /> */}
      <Stack.Screen name="Redux Counter" component={ReduxCounterScreen} />
      {/* <Stack.Screen
        name="KhataBook"
        component={KhataBookScreen}
        options={({ navigation }) => ({
          // headerShown: false,

          title: 'રસીદ પોથી',
          headerLeft: () => (
            // <IconButton name="camera" onPress={() => navigation.openDrawer()} />
            <Icon name="menu" style={{ backgroundColor: 'green', padding: 10 }} onPress={() => navigation.openDrawer()} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e',
            // backgroundColor: 'darkpink',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })} /> */}
      {/* <Stack.Screen name="ChatGptScreen" component={ChatGptScreen} /> */}
    </Stack.Navigator>
  )
}

const screenOptionStyle = {
  // headerShown: false,
  // headerStyle: {
  //   backgroundColor: "#9AC4F8",
  // },
  // headerTintColor: "white",
  // headerBackTitle: "Back",

};


export default MainStackNavigator;
