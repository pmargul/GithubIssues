import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import AppColors from '../AppColors';
import MainScreen from '../../components/screens/mainScreen/MainScreen';
import IconBar from '../../components/shared/IconBar';
import UserDetailsScreen from '../../components/screens/userDetailsScreen/UserDetailsScreen';
import SettingsScreen from '../../components/screens/settingsScreen/SettingsScreen';
import Translations from '../Translations';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/Index';


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
const SettingsNavigator = () => {
  return (
    <SettingsStackNavigator.Navigator
      screenOptions={defaultNavOptions}
    >
      <SettingsStackNavigator.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </SettingsStackNavigator.Navigator>
  );
};

export default function BottomTabNavigator() {
  const lang = useSelector((state: RootState) => state.settings.language);
  
  return (
    <BottomTab.Navigator
      barStyle={{ backgroundColor: AppColors.Orange, paddingVertical: 3, marginTop: 20 }}
      inactiveColor={AppColors.Gray}
      activeColor={AppColors.White}
      shifting={false}
    >
      <BottomTab.Screen
        name="Main"
        component={MainNavigator}
        options={{
          title: Translations.githubRecords[lang],
          tabBarIcon: ({ focused }) => (
            <IconBar
              color={AppColors.Gray}
              focusColor={AppColors.White}
              focused={focused}
              name={"format-list-bulleted"}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          title: Translations.settings[lang],
          tabBarIcon: ({ focused }) => (
            <IconBar
              color={AppColors.Gray}
              focusColor={AppColors.White}
              focused={focused}
              name={"application-settings"}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
