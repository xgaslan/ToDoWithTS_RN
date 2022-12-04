export default interface IAddTaskModal {
	isVisible: boolean
	onClose: () => void
	onAddTask: (task: string) => void
}
