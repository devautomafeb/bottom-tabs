
import React from 'react';

import Login from '../views/Login';
import { ThemeAlpha } from '../theme/Themes';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MyTasks from '../views/MyTasks';

import { MaterialIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: ThemeAlpha.Colors.colorE }}
      activeColor={ThemeAlpha.Colors.colorB}
      inactiveColor={ThemeAlpha.Colors.colorA}
    >
      <Tab.Screen name="Login" component={Login}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-task" size={24} color={color} />
          )
        }} />
      <Tab.Screen name="MyTasks" component={MyTasks} />
    </Tab.Navigator>
  );
}

