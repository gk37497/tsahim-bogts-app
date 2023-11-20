import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://tsahim-bogts.vercel.app/' }}
      setDisplayZoomControls={false}
      setBuiltInZoomControls={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
