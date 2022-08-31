import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from "react-native";
import Button from "./Button";

export default function Add_Todo({ add_todo }) {
	const [todo, set_todo] = useState();
	function add_todo_handler() {
		if (todo == "") return;

		add_todo(todo);
		set_todo("");
	}
	return (
		<View style={styles.view}>
			<TextInput
				value={todo}
				onChangeText={(text) => {
					set_todo(text);
				}}
				style={styles.text_input}
			/>
			<Button title="Add Todo" onPress={add_todo_handler}>
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	text_input: {
		borderColor: "grey",
		borderWidth: 1,
		borderRadius: 3,
		borderBottomColor: "grey",
		borderBottomWidth: 2,
		width: 200,
		marginBottom: 10,
		paddingLeft: 10,
		height: 35,
		marginTop: 10,
	},
});
