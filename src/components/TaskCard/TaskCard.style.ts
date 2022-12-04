import { StyleSheet } from "react-native"
import Colors from "./../../styles/Colors"
import Fonts from "./../../styles/Fonts"

const baseStyle = StyleSheet.create({
	container: {
		borderRadius: 10,
		padding: 10,
		marginTop: 10,
		marginBottom: 10,
	},
	content: {
		fontFamily: Fonts.defaultRegularFontFamily,
		fontSize: 17,
	},
})

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.defaultGreenColor,
		...baseStyle.container,
	},
	content: {
		color: Colors.defaultDarkColor,
		...baseStyle.content,
	},
	completedContainer: {
		...baseStyle.container,
		backgroundColor: Colors.defaultGreyColor,
	},
	completedContent: {
		...baseStyle.content,
		color: Colors.defaultTitleColor,
		textDecorationLine: "line-through",
	},
})

export default styles
