import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import TaskCard from './TaskCard';

type Props = {
	priority: 'sooner' | 'later';
	label: string;
};

export default function TaskViewer({ label, priority }: Props) {
	const db = useSQLiteContext();
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		async function setup() {
			const results = await db.getAllAsync(
				`SELECT * FROM todos WHERE priority = "${priority}" AND status = "uncompleted"`
			);
			setTodos(results as Todo[]);
		}

		setup();
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.headerTitleContainer}>
					<Feather name="calendar" size={20} color="#111" />
					<Text style={styles.headerTitle}>{label}</Text>
				</View>

				<View style={styles.taskCounterContainer}>
					<Text style={styles.taskCounterText}>{todos.length}</Text>
				</View>
			</View>

			{todos.length ? (
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={{ backgroundColor: '#eaeaea', borderRadius: 28 }}
				>
					<View style={{ padding: 8, gap: 4 }}>
						{todos.map((todo) => (
							<TaskCard key={todo.id} {...todo} />
						))}
					</View>
				</ScrollView>
			) : (
				<View style={styles.notaskCardContiainer}>
					<Text style={styles.notaskCardText}>Nothing to do.</Text>
				</View>
			)}
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
	notaskCardContiainer: {
		backgroundColor: '#eaeaea',
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
