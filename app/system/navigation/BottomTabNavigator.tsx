import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform, StatusBar } from "react-native";
import AppColors from '../AppColors';
import MainScreen from '../../components/screens/mainScreen/MainScreen';
import IconBar from '../../components/shared/IconBar';
import UserDetailsScreen from '../../components/screens/userDetailsScreen/UserDetailsScreen';


const BottomTab = createMaterialBottomTabNavigator();

const defaultNavOptions = {
    headerShown: false,
    // only for now - headerShown: false
    animationEnabled: false,
    headerStyle: {
        backgroundColor: AppColors.Black,
        elevation: 0,
        height: 100 - (StatusBar.currentHeight? StatusBar.currentHeight : 0),
        shadowOffset: { height: 0, width: 0 },
    },
    headerTintColor: AppColors.Gray,
    headerTitleStyle: {
        fontFamily: "open-sans-bold",
        fontSize: 16,
    },
    headerBackTitleStyle: {
        fontFamily: "open-sans",
    },
    navigatorStyle: { screenBackgroundColor: AppColors.Black },
};

const MainStackNavigator = createStackNavigator();

const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator
      screenOptions={defaultNavOptions}
    >
      <MainStackNavigator.Screen
        name="MainScreen"
        component={MainScreen}
      />
      <MainStackNavigator.Screen
        name="UserDetailsScreen"
        component={UserDetailsScreen}
      />
    </MainStackNavigator.Navigator>
  );
};

const SettingsStackNavigator = createStackNavigator();

const INITIAL_ROUTE_NAME = "MainNavigator";

export default function BottomTabNavigator() {
  //const language = useSelector(state => state.app.language);
  
  return (
    <BottomTab.Navigator
      barStyle={{ backgroundColor: AppColors.Black, paddingVertical: 3 }}
      inactiveColor={AppColors.Gray}
      activeColor={AppColors.White}
      shifting={false}
      //initialRouteName={INITIAL_ROUTE_NAME}     
    >
      <BottomTab.Screen
        name="Main"
        component={MainNavigator}
        options={{
          title: "Main",
          tabBarIcon: ({ focused }) => (
            <IconBar
              color={AppColors.White}
              focusColor={AppColors.White}
              focused={focused}
              name={"list"}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
