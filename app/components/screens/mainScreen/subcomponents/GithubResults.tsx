import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text
} from "react-native";
import AppColors from "../../../../system/AppColors";
import GithubUser from "../../../../models/GithubUser";

function GithubResults(props: any) {
  const [data, initData] = useState<Array<GithubUser>>();
  useEffect(() => {
    initData(props.data);
  }, [props]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(itemData) => <View style={styles.listItem}><Text style={styles.text}>{itemData.item.login}</Text></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: AppColors.Black,
    color: AppColors.White,
    textAlignVertical: "center",
    fontSize: 14,
    padding: 4,
  },
  listItem: {
    width: "80%",
    backgroundColor: AppColors.Orange,
    marginVertical: 10,
  },
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default GithubResults;
