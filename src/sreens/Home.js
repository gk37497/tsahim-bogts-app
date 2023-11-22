import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { CONSTANTS } from '../utils/constants';

export default function HomeScreen() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: `${CONSTANTS.WEB_URL}` }}
      setDisplayZoomControls={false}
      setBuiltInZoomControls={false}
      allowsBackForwardNavigationGestures
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
