import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import AppColors from '../../../../system/AppColors';
import AppStyles from '../../../../system/AppStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../system/redux/reducers/Index';
import Translations from '../../../../system/Translations';
import IconBar from '../../../shared/IconBar';

function SettingsScreenHeader(props: any) {
  const lang = useSelector((state: RootState) => state.settings.language);

  return (
    <View style={{...AppStyles.header.headerContainer, paddingVertical: 10}}>
        <View style={styles.imageContainer}>
          <IconBar
              color={AppColors.White}
              size={20}
              name={"application-settings"}
            />
        </View>
        <View style={styles.titleContainer}> 
          <Text
            style={AppStyles.fonts.headerTitle}
          >{Translations.settingsScreen[lang]}    
          </Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "10%",
    alignItems: 'center',
    padding: 5,
  },
  titleContainer: {
    width: "90%",
    alignItems: 'center',
    padding: 5,
  },
});

export default SettingsScreenHeader;
