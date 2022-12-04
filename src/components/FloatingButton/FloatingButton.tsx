// React
import React, { FC } from "react"

// React Native
import { Text, View, TouchableWithoutFeedback } from "react-native"

// Styles
import styles from "./FloatingButton.style"
import IFloatingButton from "./IFloatingButton"

const FloatingButton: FC<IFloatingButton> = ({ onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<Text style={styles.icon}>+</Text>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default FloatingButton
