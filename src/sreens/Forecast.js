import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { CONSTANTS } from '../utils/constants';

export default function ForecastScreen() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: CONSTANTS.WEB_URL + '/forecast' }}
      pullToRefreshEnabled
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
