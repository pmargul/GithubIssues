import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AppColors from '../../../../../system/AppColors';
import AppStyles from '../../../../../system/AppStyles';
import { GithubUser } from '../../../../../models/GithubDataModels';
import IconBar from '../../../../shared/IconBar';
import Translations from '../../../../../system/Translations';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../system/redux/reducers/Index';
import Clipboard from '@react-native-clipboard/clipboard'

function UserCard(props: {item: GithubUser, navigation: any}) {
  const lang = useSelector((state: RootState) => state.settings.language);
  const navigation = props.navigation;  
  
  function navigateToUserDetails(): void {
    navigation.navigate("UserDetailsScreen",{ item: props.item })
  }
  function copyToClipboard(): void {
    Clipboard.setString('hello world')
  }
  return (
    <TouchableOpacity style={AppStyles.body.cardContainer} onPress={navigateToUserDetails}>
        <View style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: "space-between"}}>          
              <View style={{...AppStyles.body.cardBody, flex: 0.75}}>
                <Text style={{...AppStyles.fonts.labelWhite}}>{Translations.login[lang]}</Text>
                <Text style={{...AppStyles.fonts.standartWhite}}>{props.item.login}</Text>
              </View>
              <View style={{...AppStyles.body.cardBody, flex: 0.23, ...styles.imageContainer}}>
                <IconBar
                    color={AppColors.White}
                    size={30}
                    name={"account-details"}
                />
              </View>
            </View>
            <TouchableOpacity style={{...AppStyles.body.cardBody,flex: 1}} onPress={copyToClipboard}>    
              <Text style={{...AppStyles.fonts.labelWhite}}>{Translations.html_url[lang]}</Text>     
              <Text style={AppStyles.fonts.standartWhite}>{props.item.html_url}</Text>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems:"center",
    justifyContent: "center",
    padding: 2
  },

});

export default UserCard;
