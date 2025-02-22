import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
		'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
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

	return <Stack />;
}
