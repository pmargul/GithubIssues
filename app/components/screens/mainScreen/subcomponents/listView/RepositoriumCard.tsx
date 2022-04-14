import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AppColors from '../../../../../system/AppColors';
import AppStyles from '../../../../../system/AppStyles';
import { GithubRepositorium } from '../../../../../models/GithubDataModels';
import IconBar from '../../../../shared/IconBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../system/redux/reducers/Index';
import Translations from '../../../../../system/Translations';

function RepositoriumCard(props: {item: GithubRepositorium}) {
  const lang = useSelector((state: RootState) => state.settings.language);

  return (
    <View style={AppStyles.body.cardContainer}>
        <View style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: "space-between"}}>          
              <View style={{...AppStyles.body.cardBody, flex: 0.75}}>
                <Text style={{...AppStyles.fonts.labelWhite}}>{Translations.name[lang]}</Text>
                <Text style={{...AppStyles.fonts.standartWhite, fontWeight: "bold"}}>{props.item.full_name}</Text>
              </View>
              <View style={{...AppStyles.body.cardBody, flex: 0.24, ...styles.imageContainer}}>
                <IconBar
                    color={AppColors.White}
                    size={30}
                    name={"source-repository"}
                />
              </View>
            </View>
            <View style={{...AppStyles.body.cardBody,flex: 1}}>   
              <Text style={{...AppStyles.fonts.labelWhite}}>{Translations.description[lang]}</Text>      
              <Text style={AppStyles.fonts.standartWhite}>{props.item.description}</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems:"center",
    justifyContent: "center",
    padding: 2
  },

});

export default RepositoriumCard;
