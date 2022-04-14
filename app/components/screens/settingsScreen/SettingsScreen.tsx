import React from 'react';
import { View, Text, StyleSheet,  } from 'react-native';
import AppStyles from '../../../system/AppStyles';
import Translations from '../../../system/Translations';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../system/redux/reducers/Index';
import RadioGroup from '../../shared/RadioGroup';
import { Languages, SearchSettings } from '../../../models/Constants';
import { setAppLanguage, setGithubDataSearchSettings } from '../../../system/redux/actions/Index';
import SettingsScreenHeader from './submodules/SettingsScreenHeader';
import AppColors from '../../../system/AppColors';

function SettingsScreen(props: any) {
  const lang = useSelector((state: RootState) => state.settings.language);
  const searchOption = useSelector((state: RootState) => state.settings.searchSettings);
  const dispatch = useDispatch();

  const langOptions = [
    { value: Languages.polish, label: Translations.polish[lang]},
    { value: Languages.english, label: Translations.english[lang]}
  ];

  const searchSettingsOptions = [
    { value: SearchSettings.onlyUsers, label: Translations.onlyUsers[lang]},
    { value: SearchSettings.onlyRepos, label: Translations.onlyRepos[lang]},
    { value: SearchSettings.all, label: Translations.all[lang]}
  ];

  function setLanguage(val: Languages) {
    dispatch(setAppLanguage(val));
  }

  function setSearchSettings(val: SearchSettings) {
    dispatch(setGithubDataSearchSettings(val));
  }

  return (
      <>
      <SettingsScreenHeader/>
      <View style={{ ...styles.container}}>
        <View style={{...AppStyles.body.cardContainer, backgroundColor: AppColors.White}}>
          <Text style={styles.label}>{Translations.language[lang]}</Text>
          <View style={{...AppStyles.body.cardBody, backgroundColor: AppColors.White}}>
            <RadioGroup selectedValue={lang} options={langOptions} onChange={setLanguage}/>      
          </View>
          <View style={{marginVertical: 10}}/>
          <Text style={styles.label}>{Translations.searchSettings[lang]}</Text>
          <View style={{...AppStyles.body.cardBody, backgroundColor: AppColors.White}}>
            <RadioGroup selectedValue={searchOption} options={searchSettingsOptions} onChange={setSearchSettings}/>      
          </View>
        </View>
        
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  label: {
    ...AppStyles.fonts.standartBold,
    fontSize: 16,
    paddingStart: 10
  }
});

export default SettingsScreen;
