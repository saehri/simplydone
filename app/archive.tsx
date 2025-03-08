import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTodoStore from '@/storage/useTodoStorage';

import TaskCard from '@/components/TaskCard';

export default function ArchiveScreen() {
	const todos = useTodoStore() as any;
	const todoData = todos.todos.filter(
		(todo: Todo) => todo.status === 'completed'
	);

	return (
		<FlatList
			data={todoData}
			ListEmptyComponent={() => (
				<View style={styles.notaskCardContainer}>
					<Text style={styles.notaskCardText}>Nothing to do.</Text>
				</View>
			)}
			renderItem={({ item }) => (
				<TaskCard
					id={item.id}
					priority={item.priority as any}
					status={item.status as any}
					title={item.title}
					toggleTodo={todos.toggleTodo}
					moveCategory={todos.moveCategory}
				/>
			)}
			style={{
				backgroundColor: '#eaeaea',
				padding: 12,
			}}
			contentContainerStyle={{
				gap: 6,
			}}
		/>
	);
}

const styles = StyleSheet.create({
	notaskCardContainer: {
		borderRadius: 28,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	notaskCardText: {
		color: '#111',
		opacity: 0.5,
		fontFamily: 'Nunito-Regular',
		fontSize: 16,
	},
});
