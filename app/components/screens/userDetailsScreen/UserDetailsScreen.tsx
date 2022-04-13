import React, { useState, useEffect, ReactNode } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppStyles from '../../../system/AppStyles';
import Translations from '../../../system/Translations';
import IconBar from '../../shared/IconBar';
import AppColors from '../../../system/AppColors';
import { GithubUser } from '../../../models/GithubDataModels';
import { useSelector } from 'react-redux';
import { RootState } from '../../../system/redux/reducers/Index';
import UserDetailsHeader from './subcomponents/UserDetailsHeader';
import { getApi } from '../../../system/ApiRequests';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Clipboard from '@react-native-clipboard/clipboard';

function UserDetailsScreen(props: any) {
  const item: GithubUser = props.route.params.item;
  const lang = useSelector((state: RootState) => state.settings.language);
  const navigation = props.navigation;

  const [followers, setFollowersValue] = useState<string>("");

  async function fetchUserDetails():  Promise<void>{
    if(item.followers_url == null){
      setFollowersValue("0");
    }
    else {
      const followers: Array<any> = await getApi(item.followers_url!);  
      setFollowersValue(followers.length.toString());
    }
    return;
  };
  
  function copyToClipboard(): void {
    if(item.html_url)
      Clipboard.setString(item.html_url);
  }

  useEffect(()=>{
    fetchUserDetails().catch(()=>{
      setFollowersValue(Translations.noInfo[lang]);
    })
  },[])
  function renderDetailsSection(label: string, value: string): ReactNode{
    return (
      <View style={styles.sectionContainer}>
          <Text style={{...AppStyles.fonts.standartBlack, fontWeight: "bold" , fontSize: 14}}>{`${label}:`}</Text>
          <Text style={{...AppStyles.fonts.standartBlack}}>{`${value}`}</Text>
      </View>
    );
  }
  return (
    <View style={AppStyles.body.bodyContainer}>
      <UserDetailsHeader navigation={navigation} title={item.login!}/>
      <View style={{ ...styles.container}}>
          <Image
              style={{...AppStyles.body.imageShape}}
              source={{uri: item.avatar_url}}
          />  
      </View>
      <View style={{ ...styles.container, width: "80%"}}>
        <View style={{...AppStyles.body.cardContainer, width: "100%"}}>
          {renderDetailsSection(Translations.login[lang], item.login)}
          {renderDetailsSection(Translations.followersAmount[lang], followers)}
          <View style={styles.sectionContainer}/>
          <Text style={{...AppStyles.fonts.standartBold, fontSize: 15}}>{`${Translations.html_url[lang]}:`}</Text>
          <TouchableOpacity style={{...AppStyles.body.cardBody, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}} onPress={()=>{copyToClipboard}}>
            <Text style={AppStyles.fonts.standartWhite}>{item.html_url}</Text>
            <IconBar
              color={AppColors.White}
              size={24}
              name={"clipboard"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  sectionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  }
});

export default UserDetailsScreen;
