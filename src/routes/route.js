import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { CONSTANTS } from '../utils/constants';
// eslint-disable-next-line import/order
import BottomTabs from './main';

const Stack = createNativeStackNavigator();

function Screen({ url }) {
  return (
    <WebView
      style={styles.container}
      source={{ uri: `${CONSTANTS.WEB_URL}/${url}` }}
      setDisplayZoomControls={false}
      setBuiltInZoomControls={false}
      allowsBackForwardNavigationGestures
      pullToRefreshEnabled
    />
  );
}

function FarmingScreen() {
  return <Screen url="farming" />;
}

function AboutScreen() {
  return <Screen url="about" />;
}

function HealthScreen() {
  return <Screen url="health" />;
}

function ManagementScreen() {
  return <Screen url="management" />;
}

function StructureScreen() {
  return <Screen url="structure" />;
}

function GalleryScreen() {
  return <Screen url="gallery" />;
}

export function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, headerTintColor: 'black' }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen
        name="Gallery"
        options={{ headerShown: true, title: 'Каталоги' }}
        component={GalleryScreen}
      />
      <Stack.Screen
        name="Structure"
        options={{ headerShown: true, title: 'Сүргийн бүтэц' }}
        component={StructureScreen}
      />
      <Stack.Screen
        name="Management"
        options={{ headerShown: true, title: 'Бэлчээрийн менежмент' }}
        component={ManagementScreen}
      />
      <Stack.Screen
        name="Health"
        options={{ headerShown: true, title: 'Малын эрүүл мэнд' }}
        component={HealthScreen}
      />
      <Stack.Screen
        name="About"
        options={{ headerShown: true, title: 'Бидний тухай' }}
        component={AboutScreen}
      />
      <Stack.Screen
        name="Farming"
        options={{
          headerShown: true,
          title: 'Мал маллагаа',
        }}
        component={FarmingScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
