import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import MainScreen from './Components/Screens/MainScreen/MainScreen';
import AppColors from './System/AppColors';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.appContainer}>
        <MainScreen/>
      </View>
    </SafeAreaView>
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
