import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';
import AppColors from '../../../../system/AppColors';
import AppStyles from '../../../../system/AppStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../system/redux/reducers/Index';
import Translations from '../../../../system/Translations';
import IconBar from '../../../shared/IconBar';
import { TouchableOpacity } from 'react-native-gesture-handler';

function MainScreenHeader(props: any) {
  const lang = useSelector((state: RootState) => state.settings.language);

  function onInputValueChange(e: string) {
    props.updateSearchInput(e);
  }

  return (
    <View style={AppStyles.header.headerContainer}>
      <View style={styles.searchInputSection}>
        <TextInput
          placeholder={Translations.search[lang]}
          placeholderTextColor={AppColors.White}
          style={styles.textInput}
          value={props.searchInput}
          onChangeText={onInputValueChange}
          numberOfLines={1}
        />
        <TouchableOpacity style={styles.imageSection} onPress={props.refreshData}>
          <Text style={AppStyles.fonts.headerTitle}>
            {Translations.refresh[lang]}    
          </Text>
          <IconBar
                color={AppColors.White}
                size={24}
                name={"refresh"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    ...AppStyles.fonts.headerTitle,
    textAlignVertical: 'center',
    paddingTop: 10,
    maxWidth: "50%",
    width: "50%",
    flexDirection: "row",
    alignItems: "center"
  },
  imageSection:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
  },
  searchInputSection: {
    width: "100%",
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
    paddingHorizontal: 10
  },
});

export default MainScreenHeader;
