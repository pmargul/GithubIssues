import * as React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { StyleSheet, SafeAreaView } from 'react-native';
import BottomTabNavigator from './BottomTabNavigator';
import AppColors from '../AppColors';


const Stack = createStackNavigator();

export default function MainNavigator() { 

  const MyTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: AppColors.White    
    },
  };

 
  return (   
    <SafeAreaView style={styles.container}>    
       <StatusBar backgroundColor={AppColors.Black} barStyle={'light-content'} animated={false} translucent={false} />       
        <NavigationContainer theme={MyTheme}>          
            <Stack.Navigator screenOptions={{headerShown: false}}> 
              <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />           
            </Stack.Navigator>
        </NavigationContainer>  
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
  },
});