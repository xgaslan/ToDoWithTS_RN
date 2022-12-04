import { StyleSheet } from "react-native"
import Colors from "./../../styles/Colors"

const style = StyleSheet.create({
	container: {
		position: "absolute",
		backgroundColor: Colors.defaultGreenColor,
		borderRadius: 60,
		width: 60,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
		right: 15,
		bottom: 15,
	},
	icon: {
		fontSize: 35,
		color: Colors.defaultDarkColor,
	},
})

export default style
