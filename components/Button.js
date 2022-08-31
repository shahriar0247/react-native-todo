import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function Button({ style, title, onPress, color="normal" }) {
	return (
		<View style={style}>
			{color == "red" && (
				<TouchableOpacity onPress={onPress} style={[styles.button, styles.red_button]}>
					<Text style={styles.button_text}>{title}</Text>
				</TouchableOpacity>
			)}

			{color == "normal" && (
				<TouchableOpacity onPress={onPress} style={styles.button}>
					<Text style={styles.button_text}>{title}</Text>
				</TouchableOpacity>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#4056ff",
		width: 100,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 7,
		marginLeft: 10,
		height: 40,
	},
	red_button: {
		backgroundColor: "red",
	},
	button_text: {
		color: "white",
		fontWeight: "bold",
	},
});
