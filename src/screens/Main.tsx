import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import Home from './Home';
import Bookmarks from './Bookmarks';
import Settings from './Settings';
import Search from './Search';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Icon } from '@rneui/themed';
import { Icon } from '@rneui/base';
import { StatusBar } from 'react-native';

export default function Main() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName='Home' labeled={false} inactiveColor='gray' activeColor='#ed6335'
     barStyle={
      {
        backgroundColor:"transparent",
      }
    }>
      <Tab.Screen name='Home' component={Home} 
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="home-outline" type='ionicon' color={color} size={26} />
        ),
      }}/>
      <Tab.Screen name='Search' component={Search} 
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="search1" type='ant-design' color={color} size={26} />
        )}}/>
      <Tab.Screen name='Bookmarks' component={Bookmarks} options={{
        tabBarIcon: ({ color }) => (
          <Icon name="bookmark-outline" type='ionicons' color={color} size={26} />
        )}}/>
      <Tab.Screen name='Settings' component={Settings} options={{
        tabBarIcon: ({ color }) => (
          <Icon name="settings" type='feather' color={color} size={26} />
        )}}/>
    </Tab.Navigator>
  )
}