import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import AppColors from '../../../../system/AppColors';
import AppStyles from '../../../../system/AppStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../system/redux/reducers/Index';
import Translations from '../../../../system/Translations';

function MainScreenHeader(props: any) {
  const lang = useSelector((state: RootState) => state.settings.language);
  useEffect(() => {}, [props]);

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
          numberOfLines={1}></TextInput>
          {/*TODO icon*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    ...AppStyles.fonts.headerTitle,
    backgroundColor: AppColors.Orange,
    textAlignVertical: 'center',
    padding: 4,
  },
  filterSection: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: AppColors.Orange,
    width: '20%',
    height: '100%',
    padding: 4
  },
  searchInputSection: {
    width: "100%"
  },
});

export default MainScreenHeader;
