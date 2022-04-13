import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import AppColors from '../../../../system/AppColors';
import AppStyles from '../../../../system/AppStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../system/redux/reducers/Index';
import Translations from '../../../../system/Translations';
import IconBar from '../../../shared/IconBar';

function UserDetailsHeader(props: {navigation: any, title: string}) {
  const lang = useSelector((state: RootState) => state.settings.language);
  useEffect(() => {}, [props]);

  return (
    <View style={AppStyles.header.headerContainer}>
        <TouchableOpacity style={styles.imageContainer} onPress={()=> props.navigation.goBack()}>
          <IconBar
              color={AppColors.White}
              size={30}
              name={"arrow-left-bold"}
            />
            <View style={{marginHorizontal: 5}}/>
            <Text
              style={AppStyles.fonts.headerTitle}
            >{Translations.goBack[lang]}    
          </Text>
        </TouchableOpacity>
        <View style={styles.titleContainer}> 
          <Text
            style={AppStyles.fonts.headerTitle}
          >{props.title}    
          </Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "40%",
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: "row"
  },
  titleContainer: {
    width: "60%",
    alignItems: 'flex-end',
    padding: 5,
    paddingEnd: 20
  },
});

export default UserDetailsHeader;
