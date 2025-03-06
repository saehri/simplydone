import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
		'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
		'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	// return nothing if assets are not loaded
	if (!loaded && !error) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="about"
					options={{
						title: 'About',
						animation: 'ios_from_left',
					}}
				/>
				<Stack.Screen
					name="archive"
					options={{
						title: 'Archive',
						animation: 'ios_from_right',
					}}
				/>
				<Stack.Screen name="+not-found" />
			</Stack>
		</SafeAreaProvider>
	);
}
