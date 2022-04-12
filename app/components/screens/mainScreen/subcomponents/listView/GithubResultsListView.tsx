import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {
  GithubUser,
  IGithubRecord,
  GithubRepositorium,
} from '../../../../../models/GithubDataModels';
import UserCard from './UserCard';
import RepositoriumCard from './RepositoriumCard';
import AppStyles from '../../../../../system/AppStyles';
import IconBar from '../../../../shared/IconBar';
import AppColors from '../../../../../system/AppColors';
import Translations from '../../../../../system/Translations';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../system/redux/reducers/Index';

function GithubResultsListView(props: any) {
  const [data, initData] = useState<Array<IGithubRecord>>();
  const lang = useSelector((state: RootState) => state.settings.language);

  useEffect(() => {
    initData(props.data);
  }, [props]);

  return (
    <View style={styles.listContainer}>
      {props.errorOccured ? (
        <View style={styles.errorInfo}>
          <IconBar color={AppColors.Black} size={50} name={'alert'} />
          <Text style={{...AppStyles.fonts.standartBold, marginTop: 10}}>
            {Translations.errorOccured[lang]}
          </Text>
        </View>
      ) : data?.length === 0 ? (
        <View style={styles.errorInfo}>
          <Text style={{...AppStyles.fonts.standartBold, marginTop: 10}}>
            {Translations.emptyList[lang]}
          </Text>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={itemData => {
            if (itemData.item instanceof GithubUser) {
              return (
                <View style={styles.listItem}>
                  <UserCard
                    item={itemData.item as GithubUser}
                    navigation={props.navigation}
                  />
                </View>
              );
            }

            return (
              <View style={styles.listItem}>
                <RepositoriumCard item={itemData.item as GithubRepositorium} />
              </View>
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  errorInfo: {
    width: '100%',
    alignItems: 'center',
    marginTop: 150,
  },
  listItem: {
    width: '100%',
    //alignItems: "center",
    marginVertical: 5,
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 2,
    height: '100%',
  },
});

export default GithubResultsListView;
