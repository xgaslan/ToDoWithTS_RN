//import liraries
import React, { FC } from "react"
import { View, Text, TouchableWithoutFeedback } from "react-native"
import styles from "./TaskCard.style"
import ITaskCard from "./ITaskCard"

// create a component
const TaskCard: FC<ITaskCard> = ({ item, onDelete }) => {
	return item.isCompleted ? (
		<TouchableWithoutFeedback onLongPress={onDelete}>
			<View style={styles.completedContainer}>
				<Text style={styles.completedContent}>{item.content}</Text>
			</View>
		</TouchableWithoutFeedback>
	) : (
		<TouchableWithoutFeedback onLongPress={onDelete}>
			<View style={styles.container}>
				<Text style={styles.content}>{item.content}</Text>
			</View>
		</TouchableWithoutFeedback>
	)
}

//make this component available to the app
export default TaskCard
