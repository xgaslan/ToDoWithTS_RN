// React
import React, { useState } from "react"

// React Native
import {
	StyleSheet,
	Text,
	View,
	Platform,
	StatusBar,
	FlatList,
} from "react-native"

// Styles
import Colors from "./styles/Colors"
import Fonts from "./styles/Fonts"

// Components
import FloatingButton from "./components/FloatingButton"
import AddTaskModal from "./components/AddTaskModal"
import TaskCard from "./components/TaskCard"

const App = () => {
	// useState
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
	const [toDoList, setToDoList] = useState<any[]>([])

	// Functions
	const handleModalVisibility = () => {
		setIsModalVisible(!isModalVisible)
	}

	const checkAllreadyExist = (taskContent: string) => {
		const tempTaskContent = taskContent.trim().toLowerCase()
		const checkDuplicate = toDoList.find(
			(task: any) =>
				task.content.trim().toLowerCase() === tempTaskContent,
		)
		return checkDuplicate
	}

	const addTask = (taskContent: string) => {
		const checkDuplicate = checkAllreadyExist(taskContent)
		if (checkDuplicate) {
			alert("This task already exist")
			return
		} else {
			const newTask = {
				id: toDoList.length + 1,
				content: taskContent,
				isCompleted: false,
			}
			setToDoList([...toDoList, newTask])
		}
		setIsModalVisible(false)
	}

	const deleteTask = (task: any) => {
		if (!task.isCompleted) {
			const newToDoList = toDoList.map((item: any) => {
				if (item.id === task.id) {
					item.isCompleted = true
				}
				return item
			})
			setToDoList(newToDoList)
		} else {
			const tempToDoList = toDoList.filter(
				(item: any) => item.id !== task.id,
			)
			setToDoList(tempToDoList)
			alert("Task deleted")
		}
	}

	const renderToDoList = ({ item }: any) => {
		return <TaskCard item={item} onDelete={() => deleteTask(item)} />
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>My To Do List</Text>
			<FlatList
				data={toDoList}
				renderItem={(item: any) => renderToDoList(item)}
			/>
			<FloatingButton onPress={handleModalVisibility} />
			<AddTaskModal
				isVisible={isModalVisible}
				onClose={handleModalVisibility}
				onAddTask={addTask}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		backgroundColor: Colors.defaultDarkColor,
	},
	title: {
		textAlign: "center",
		borderRadius: 10,
		borderBottomColor: Colors.defaultTitleColor,
		borderBottomWidth: 1,
		color: Colors.defaultTitleColor,
		fontFamily: Fonts.defaultRegularFontFamily,
		fontSize: 24,
		padding: 10,
	},
})

export default App
