import * as React from 'react';
import AppColors from '../../system/AppColors';
import Icon from 'react-native-ionicons';
import {View} from 'react-native';

export default function IconBar(props: any) {
  const focusColorValue = props.focusColor ? props.focusColor : AppColors.Black;
  const colorValue = props.color ? props.color : AppColors.Black;

  return (
  <Icon
    name={props.name}
    size={30} 
    color={AppColors.White}
  />
  );
}
