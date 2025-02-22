import { Pressable, StyleSheet, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { Link } from 'expo-router';

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
					<Feather name="settings" size={20} />
				</View>
			</Link>

			<Pressable style={styles.buttonContainer}>
				<Feather name="plus" size={20} />
			</Pressable>

			<Link href="/archive">
				<View style={styles.buttonContainer}>
					<Feather name="archive" size={20} />
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
