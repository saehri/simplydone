import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

type Props = {
	priority: 'sooner' | 'later';
	label: string;
};

export default function TaskViewer({ label, priority }: Props) {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.headerTitleContainer}>
					<Feather name="calendar" size={20} color="#111" />
					<Text style={styles.headerTitle}>{label}</Text>
				</View>

				<View style={styles.taskCounterContainer}>
					<Text style={styles.taskCounterText}>0</Text>
				</View>
			</View>

			<View
				style={{
					backgroundColor: '#eaeaea',
					borderRadius: 28,
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text
					style={{
						color: '#111',
						opacity: 0.5,
						fontFamily: 'Nunito-Regular',
						fontSize: 16,
					}}
				>
					Nothing to do.
				</Text>
			</View>

			{/* <ScrollView
				style={{ backgroundColor: '#eaeaea', borderRadius: 28 }}
			></ScrollView> */}
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
});
