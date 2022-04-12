import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Platform, TouchableOpacity} from 'react-native';
import AppColors from '../../../../../system/AppColors';
import AppStyles from '../../../../../system/AppStyles';
import { GithubUser } from '../../../../../models/GithubDataModels';
import IconBar from '../../../../shared/IconBar';
import Translations from '../../../../../system/Translations';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../system/redux/reducers/Index';

function UserCard(props: {item: GithubUser, navigation: any}) {
  const lang = useSelector((state: RootState) => state.settings.language);

  const navigation = props.navigation;  
  
  function navigateToUserDetails(): void {
    navigation.navigate("UserDetailsScreen",{ item: props.item })
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
                    name={"navigate"}
                />
              </View>
            </View>
            <View style={{...AppStyles.body.cardBody,flex: 1}}>    
              <Text style={{...AppStyles.fonts.labelWhite}}>{Translations.repos_url[lang]}</Text>     
              <Text style={AppStyles.fonts.standartWhite}>{props.item.avatar_url}</Text>
            </View>
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
