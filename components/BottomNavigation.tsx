import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Cog, ListTodo } from 'lucide-react-native';

import CreateTaskModal from './CreateTaskModal';

export default function BottomNavigation() {
	return (
		<View
			style={{
				justifyContent: 'space-between',
				alignItems: 'center',
				flexDirection: 'row',
				minHeight: 68,
				paddingHorizontal: 16,
			}}
		>
			<Link href="/about">
				<View style={styles.buttonContainer}>
					<Cog color="#111" size={20} />
				</View>
			</Link>

			<CreateTaskModal />

			<Link href="/archive">
				<View style={styles.buttonContainer}>
					<ListTodo color="#111" size={20} />
				</View>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		width: 48,
		height: 48,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
