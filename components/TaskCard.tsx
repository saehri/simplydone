import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Check, MoveDown, MoveUp } from 'lucide-react-native';

interface Props extends Todo {
	moveCategory: (id: string) => void;
	toggleTodo: (id: string) => void;
}

export default function TaskCard({
	title,
	priority,
	status,
	id,
	moveCategory,
	toggleTodo,
}: Props) {
	return (
		<View style={styles.container}>
			<Pressable onPress={() => toggleTodo(id)} style={styles.button}>
				<View
					style={{
						width: 20,
						height: 20,
						alignItems: 'center',
						justifyContent: 'center',
						borderWidth: 1,
						borderColor: 'rgba(0, 0, 0, .3)',
						borderRadius: 6,
						backgroundColor:
							status === 'completed' ? 'rgb(255, 182, 0)' : '#fff',
					}}
				>
					{status === 'completed' ? <Check size={14} color="#111" /> : <View />}
				</View>
			</Pressable>

			<Pressable style={styles.titleContainer}>
				<Text
					style={[
						styles.title,
						{
							textDecorationLine:
								status === 'completed' ? 'line-through' : 'none',
							opacity: status === 'completed' ? 0.6 : 1,
						},
					]}
					numberOfLines={1}
					lineBreakMode="tail"
					ellipsizeMode="tail"
				>
					{title}
				</Text>
			</Pressable>

			<Pressable style={[styles.button]} onPress={() => moveCategory(id)}>
				{priority === 'sooner' ? (
					<MoveDown color="#111" size={16} />
				) : (
					<MoveUp color="#111" size={16} />
				)}
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		borderRadius: 12,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 0,
	},
	titleContainer: {
		flex: 1,
		justifyContent: 'center',
		paddingLeft: 10,
	},
	title: {
		fontFamily: 'Nunito-SemiBold',
		fontSize: 16,
		color: '#111',
	},
	button: {
		width: 36,
		height: 36,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
