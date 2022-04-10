import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import AppColors from '../../../../system/AppColors';
import AppStyles from '../../../../system/AppStyles';

function SearchBar(props: any) {
  useEffect(() => {}, [props]);

  function onInputValueChange(e: string) {
    props.updateSearchInput(e);
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchInputSection}>
        <TextInput
          placeholder="Wyszukaj..."
          placeholderTextColor={AppColors.White}
          style={styles.textInput}
          value={props.searchInput}
          onChangeText={onInputValueChange}
          numberOfLines={1}></TextInput>
          {/*TODO icon*/}
      </View>
      <TouchableOpacity style={styles.filterSection}>
        <Text style={{color: AppColors.White, textAlign: "center" ,textAlignVertical: "center"}}>{'Filtruj'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    ...AppStyles.fonts.standartWhite,
    backgroundColor: AppColors.Black,
    textAlignVertical: 'center',
    padding: 4,
  },
  filterSection: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: AppColors.Orange,
    width: '20%',
    height: '100%',
    padding: 4
  },
  searchInputSection: {
    width: "70%"
  },
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SearchBar;
