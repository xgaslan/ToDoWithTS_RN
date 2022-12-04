export default interface ITaskCard {
	item: { id: number; content: string; isCompleted: boolean }
	onDelete: () => void
}
