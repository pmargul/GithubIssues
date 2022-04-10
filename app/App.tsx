import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import AppColors from './system/AppColors';
import MainNavigator from './system/navigation/MainNavigator';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
/*<SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.appContainer}>
        <MainNavigator/>
      </View>
  </SafeAreaView>*/
  return (
    <MainNavigator/>   
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: AppColors.White,
    paddingHorizontal: 24,
    marginTop: 12
  },
});

export default App;
