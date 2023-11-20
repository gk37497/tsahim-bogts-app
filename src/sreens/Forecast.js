import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ForecastScreen() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://tsahim-bogts.vercel.app/forecast' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
