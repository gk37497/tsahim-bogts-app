import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import ForecastScreen from '../sreens/Forecast';
import HomeScreen from '../sreens/Home';
import NewsScreen from '../sreens/News';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Нүүр',
          title: 'Нүүр хуудас',
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: 'Мэдээ',
          title: 'Мэдээ мэдээлэл',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="newspaper" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Forecast"
        component={ForecastScreen}
        options={{
          tabBarLabel: 'Цаг агаар',
          title: 'Цаг агаар',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="weather-cloudy" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
