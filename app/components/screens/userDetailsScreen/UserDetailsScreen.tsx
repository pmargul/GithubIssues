import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppStyles from '../../../system/AppStyles';
import Translations from '../../../system/Translations';
import IconBar from '../../shared/IconBar';
import AppColors from '../../../system/AppColors';
import { GithubUser } from '../../../models/GithubDataModels';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../system/redux/reducers/Index';
import UserDetailsHeader from './subcomponents/UserDetailsHeader';
import { getApi } from '../../../system/ApiRequests';

function UserDetailsScreen(props: any) {
  const item: GithubUser = props.route.params.item;
  const lang = useSelector((state: RootState) => state.settings.language);
  const navigation = props.navigation;

  const [followers, setFollowersValue] = useState<string>();

  async function fetchUserDetails():  Promise<void>{
    const get_avatar_url = item.avatar_url;

    if(item.followers_url == null){
      setFollowersValue("0");
    }
    else {
      const followers: Array<any> = await getApi(item.followers_url!);  
      console.log(followers)
      setFollowersValue(followers.length.toString());
    }
    return;
  };

  useEffect(()=>{
    fetchUserDetails().catch(()=>{
      setFollowersValue("Brak informacji");
    })
  },[])

  return (
    <View style={AppStyles.body.bodyContainer}>
      <UserDetailsHeader navigation={navigation}/>
      <View style={{ ...styles.container}}>
        <View style={AppStyles.body.cardContainer}>
          <Image
              style={{...AppStyles.body.imageShape}}
              source={{uri: 'https://avatars.githubusercontent.com/u/1?v=4'}}
          />  
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

});

export default UserDetailsScreen;
