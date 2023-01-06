import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import * as ThemeConfig from './src/constans/Theme.json';
import { Theme } from './src/constans';

import { HomeScreen } from './src/components/screens';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style={ThemeConfig.theme} />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.EerieBlack_1,
  },
});
