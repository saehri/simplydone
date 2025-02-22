import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TaskViewer from '@/components/TaskViewer';
import BottomNavigation from '@/components/BottomNavigation';

export default function Index() {
	return (
		<SafeAreaView style={{ backgroundColor: '#fff', padding: 16, flex: 1 }}>
			<View style={{ flex: 1, gap: 16, flexDirection: 'column' }}>
				<TaskViewer label="Sooner" priority="sooner" />
				<TaskViewer label="Later" priority="later" />
			</View>

			<BottomNavigation />
		</SafeAreaView>
	);
}
