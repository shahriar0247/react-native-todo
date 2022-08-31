import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Button from "./Button";


export default function Todo({ todo, delete_todo }) {
  function delete_todo_handler(){
    delete_todo(todo.key)
  }
	return (
		<View style={styles.todo}>
			<View>
				<Text style={styles.todo_text}>{todo.value}</Text>
				<Text style={styles.todo_date}>{todo.date}</Text>
			</View>
			<Button onPress={delete_todo_handler} style={styles.delete_btn} color="red" title="Delete"></Button>
		</View>
	);
}

const styles = StyleSheet.create({
	todo: {
		borderBottomColor: "#1f1f1f",
		borderBottomWidth: 2,
		padding: 5,
		marginBottom: 10,
		display: "flex",
		flexDirection: "row",
	},
	todo_text: {
		color: "#1f1f1f",
		fontWeight: "bold",
		fontSize: 16,
	},
	todo_date: {
		fontSize: 9,
		height: 13,
	},
	delete_btn: {
    marginLeft: "auto"
  },
});
