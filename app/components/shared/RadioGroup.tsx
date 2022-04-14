import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Checkbox} from 'react-native-paper';
import AppStyles from '../../system/AppStyles';
import AppColors from '../../system/AppColors';

export default function RadioGroup(props: {
  options: Array<{value: any; label: string}>;
  selectedValue: any;
  onChange: Function;
}) {
  function handleSelectionChange(value: any) {
    props.onChange(value);
  }
  return (
    <View style={styles.container}>
      {props.options.map(el => {
        return (
          <View style={styles.option} key={el.value}>
            <Checkbox
              color={AppColors.Orange}
              uncheckedColor={AppColors.Black}
              status={props.selectedValue === el.value ? 'checked' : 'unchecked'}
              onPress={() => {
                handleSelectionChange(el.value);
              }}
            />
            <Text style={AppStyles.fonts.boldOrange}>{el.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  container2: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
