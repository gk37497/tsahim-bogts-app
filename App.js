import { NavigationContainer } from '@react-navigation/native';

import BottomTabs from './src/routes/main';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
