import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../styles/global";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comments Screen</Text>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: colors.black_primary,
  },
});
