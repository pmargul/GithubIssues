import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';
import AppColors from '../../../../system/AppColors';
import AppStyles from '../../../../system/AppStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../system/redux/reducers/Index';
import Translations from '../../../../system/Translations';
import IconBar from '../../../shared/IconBar';

function UserDetailsHeader(props: {navigation: any}) {
  const lang = useSelector((state: RootState) => state.settings.language);
  useEffect(() => {}, [props]);

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.imageContainer} onPress={()=> props.navigation.goBack()}>
          <IconBar
              color={AppColors.White}
              size={20}
              name={"list"}
            />
        </TouchableOpacity>
        <View style={styles.titleContainer}> 
          <Text
            style={AppStyles.fonts.headerTitle}
          >{"UserDetails"}    
          </Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "20%",
    alignItems: 'center',
    padding: 5,
  },
  titleContainer: {
    width: "80%",
    alignItems: 'flex-end',
    padding: 5,
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    backgroundColor: AppColors.Orange
  },
});

export default UserDetailsHeader;
