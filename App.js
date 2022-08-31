import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Add_Todo from "./components/Add_Todo";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

class Todo {
	constructor(key, value, date, complete) {
		this.key = key;
		this.value = value;
		this.date = date;
		this.complete = complete;
	}
}
export default function App() {
	const [todos, set_todos] = useState([]);

	function add_todo(todo) {
		let todo_object = new Todo(uuidv4(), todo, moment().format("llll"), false);
		set_todos((old_todos) => {
			return [...old_todos, todo_object];
		});
	}

	function delete_todo(todo_key) {
		set_todos((old_todos) => {
			return old_todos.filter((todo) => todo.key != todo_key);
		});
	}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Header></Header>
			<Todos delete_todo={delete_todo} todos={todos}></Todos>
			<Add_Todo add_todo={add_todo}></Add_Todo>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 70,
		marginLeft: 20,
		marginRight: 20,
	},
});
