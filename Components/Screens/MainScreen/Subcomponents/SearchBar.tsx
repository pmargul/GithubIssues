import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import AppColors from '../../../../System/AppColors';

function SearchBar(props: any) {
  useEffect(() => {}, [props]);

  function onInputValueChange(e: string) {
    props.updateSearchInput(e);
  }

  return (
    <View style={styles.container}>
      <View style={{width: '70%'}}>
        <TextInput
          placeholder="Wyszukaj..."
          placeholderTextColor={AppColors.White}
          style={styles.textInput}
          value={props.searchInput}
          onChangeText={onInputValueChange}
          numberOfLines={1}></TextInput>
      </View>
      <TouchableOpacity style={styles.filter}>
        <Text style={{color: AppColors.White, textAlign: "center" ,textAlignVertical: "center"}}>{'Filtruj'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: AppColors.Black,
    color: AppColors.White,
    textAlignVertical: 'center',
    fontSize: 14,
    padding: 4,
  },
  filter: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: AppColors.Orange,
    width: '20%',
    height: '100%',
    padding: 4
  },
  container: {
    //width: "100%",
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SearchBar;
