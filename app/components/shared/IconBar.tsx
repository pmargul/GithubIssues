import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppColors from "../../system/AppColors";

export default function IconBar(props: any) {
  const [colorValue, setColorValue] = useState(AppColors.White);

  useEffect(()=>{
      const renderColorValue = props.focused ? props.focusColor : props.color;
      setColorValue(renderColorValue);
  })

  return (
  <MaterialCommunityIcons
    name={props.name}
    size={props.size ? props.size : 20} 
    color={colorValue}
  />
  );
}
