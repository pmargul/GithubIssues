import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text, Image} from 'react-native';
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

function GithubResultsListView(props: any) {
  const [data, initData] = useState<Array<IGithubRecord>>();

  useEffect(() => {
    initData(props.data);
  }, [props]);

  return (
    <View style={styles.listContainer}>
      {props.errorOccured ? (
        <View style={styles.errorInfo}>
          <IconBar color={AppColors.Black} size={50} name={'list'} />
          <Text style={{...AppStyles.fonts.standartBold, marginTop: 10}}>
            {'Wystąpił nieoczekiwany błąd. Nie udało się pobrać danych...'}
          </Text>
        </View>
      ) : data?.length === 0 ? (
        <View style={styles.errorInfo}>
          <Text style={{...AppStyles.fonts.standartBold, marginTop: 10}}>
            {'Lista danych jest pusta'}
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
