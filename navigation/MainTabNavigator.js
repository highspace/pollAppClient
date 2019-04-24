import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
//import LinksScreen from '../screens/LinksScreen';
import ProfileScreen from '../screens/ProfileScreen';
//import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

//const LinksStack = createStackNavigator({
//  Links: LinksScreen,
//});
//
//LinksStack.navigationOptions = {
//  tabBarLabel: 'New Poll',
//  tabBarIcon: ({ focused }) => (
//    <TabBarIcon
//      focused={focused}
//      name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
//    />
//  ),
//};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
      //icon={require('./assets/images/profileicon.png')}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
//  LinksStack,
  ProfileStack
});
