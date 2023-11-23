import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import { StatusBar, View } from 'react-native';

import { MyStack } from './src/routes/route';

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <MyStack />
      </NavigationContainer>
    </View>
  );
}
