import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { Text, View } from 'react-native';

import BottomTabs from './main';

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export function DrawerMenu() {
  return (
    <Drawer.Navigator screenOptions={{ drawerPosition: 'right', headerShown: false }}>
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}
