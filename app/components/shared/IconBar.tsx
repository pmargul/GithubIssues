import React, { useEffect, useState } from "react";
import Icon from 'react-native-ionicons';
import AppColors from "../../system/AppColors";

export default function IconBar(props: any) {
  const [colorValue, setColorValue] = useState(AppColors.White);

  useEffect(()=>{
      const renderColorValue = props.focused ? props.color : props.focusColor;
      setColorValue(renderColorValue);
  })

  return (
  <Icon
    name={props.name}
    size={30} 
    color={colorValue}
  />
  );
}
