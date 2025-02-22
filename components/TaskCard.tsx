import { Pressable, StyleSheet, Text, View } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

export default function TaskCard({ title, priority, status, id }: Todo) {
	return (
		<View style={styles.container}>
			<Pressable
				style={[
					styles.button,
					{
						width: 20,
						height: 20,
						borderWidth: 1,
						borderColor: 'rgba(0, 0, 0, .3)',
						borderRadius: 6,
						backgroundColor:
							status === 'completed' ? 'rgb(255, 182, 0)' : '#fff',
					},
				]}
			>
				{status === 'completed' ? (
					<Feather name="check" size={20} color="#fff" />
				) : (
					<View />
				)}
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

			<Pressable style={styles.button}>
				<Feather
					name={priority === 'sooner' ? 'chevrons-down' : 'chevrons-up'}
					size={20}
					color="#111"
				/>
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
		paddingLeft: 8,
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
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
