import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function AppLoader(props: any) {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={props.color}/>
            <View style={styles.textView}>
                <Text style={props.textStyle}>{props.message}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 150,
        flex: 1
      },
    textView: {
        flexDirection:'row',
        justifyContent: 'center',
        paddingTop: 50
    },
  });