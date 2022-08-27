import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Todo({ todo }) {
  return (
    <View style={styles.todo}>
      <Text style={styles.todo_text}>{todo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    borderBottomColor: "#1f1f1f",
    borderBottomWidth: 2,
    padding:5,
    marginBottom: 10
  },
  todo_text: {
    color: "#1f1f1f",
    fontWeight: "bold",
    fontSize: 15
  },
});
