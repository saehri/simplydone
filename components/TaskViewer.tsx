import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CalendarClock, CalendarDays } from 'lucide-react-native';

import useTodoStore from '@/storage/useTodoStorage';

import TaskCard from './TaskCard';

type Props = {
	priority: 'sooner' | 'later';
	label: string;
};

export default function TaskViewer({ label, priority }: Props) {
	const todos = useTodoStore() as any;
	const todoData = todos.todos.filter(
		(todo: Todo) => todo.priority === priority
	);

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.headerTitleContainer}>
					{priority === 'sooner' ? (
						<CalendarClock size={20} color="#111" />
					) : (
						<CalendarDays size={20} color="#111" />
					)}
					<Text style={styles.headerTitle}>{label}</Text>
				</View>

				<View style={styles.taskCounterContainer}>
					<Text style={styles.taskCounterText}>{todoData.length}</Text>
				</View>
			</View>

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
					borderRadius: 28,
					padding: 12,
				}}
				contentContainerStyle={{
					gap: 6,
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		flexDirection: 'row',
		gap: 6,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: 16,
	},
	headerTitleContainer: {
		flexDirection: 'row',
		gap: 6,
		alignItems: 'center',
	},
	headerTitle: {
		fontFamily: 'Nunito-Bold',
		fontSize: 16,
		color: '#111',
	},
	taskCounterContainer: {
		backgroundColor: '#eaeaea',
		borderRadius: 20,
		minWidth: 20,
		height: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	taskCounterText: {
		fontSize: 12,
		fontFamily: 'Nunito-SemiBold',
		color: '#111',
	},
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
