import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {
  GithubUser,
  IGithubRecord,
  GithubRepositorium,
} from '../../../../../models/GithubDataModels';
import UserCard from './UserCard';
import RepositoriumCard from './RepositoriumCard';

function GithubResultsListView(props: any) {
  const [data, initData] = useState<Array<IGithubRecord>>();

  useEffect(() => {
    initData(props.data);
  }, [props]);

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={itemData => {
          if (itemData.item instanceof GithubUser) {
            
            return (
              <View style={styles.listItem}>
                <UserCard item={(itemData.item as GithubUser)}/>
              </View>
            );
          }

          return (
            <View style={styles.listItem}>
              <RepositoriumCard item={(itemData.item as GithubRepositorium)}/>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginVertical: 5,
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 2
  },
});

export default GithubResultsListView;
