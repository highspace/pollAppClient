import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';

import ProfileScreen from '../screens/ProfileScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import CreatePollScreen from '../screens/CreatePollScreen';

// --- Test Code For login ---
const LoginStack = createStackNavigator({
  Login: LoginScreen,
});
LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-log-in' : 'md-log-in'}
    />
  ),
};

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

const CreatePollStack = createStackNavigator({
  CreatePoll: CreatePollScreen,
});

CreatePollStack.navigationOptions = {
  tabBarLabel: 'New Poll',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name = {
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

//const LinksStack = createStackNavigator({
//  Links: LinksScreen,
//});

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

export default createDrawerNavigator({
  HomeStack,
  ProfileStack,
  CreatePollStack
});
