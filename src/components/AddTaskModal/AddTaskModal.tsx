// React
import React, { FC, useState } from "react"

// React Native
import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native"
import Modal from "react-native-modal"

// Styles
import styles from "./AddTaskModal.style"

// Interfaces
import IAddTaskModal from "./IAddTaskModal"

const AddTaskModal: FC<IAddTaskModal> = ({ isVisible, onClose, onAddTask }) => {
	// useState
	const [taskContent, setTaskContent] = useState<string>("")

	const handleAddTask = () => {
		if (taskContent) {
			onAddTask(taskContent)
			setTaskContent("")
			return
		}
		alert("Please enter a task")
	}

	const handleOnChangeText = (text: string) => {
		setTaskContent(text)
	}
	return (
		<Modal
			isVisible={isVisible}
			style={styles.modalContainer}
			onBackdropPress={onClose}
		>
			<View style={styles.innerContainer}>
				<Text style={styles.title}>Add a task to your list</Text>
				<TextInput
					style={styles.input}
					value={taskContent}
					placeholder="Task..."
					placeholderTextColor="white"
					multiline={true}
					onChangeText={(text: string) => handleOnChangeText(text)}
				></TextInput>
				<TouchableWithoutFeedback onPress={handleAddTask}>
					<View style={styles.buttonContainer}>
						<Text>Add the task</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</Modal>
	)
}

export default AddTaskModal
