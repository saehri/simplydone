import { useEffect, useRef, useState } from 'react';
import {
	Animated,
	Modal,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

import Feather from '@expo/vector-icons/Feather';

// Custom easing functions
const easeOutExpo = (t: number) => 1 - Math.pow(2, -10 * t);
const easeInExpo = (t: number) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1)));

export default function CreateTaskModal() {
	const [formValue, setFormValue] = useState<string>('');
	const [modalVisible, setModalVisible] = useState<boolean>(false);

	const backdropOpacity = useRef(new Animated.Value(0)).current;
	const translateY = useRef(new Animated.Value(300)).current; // Start off-screen

	useEffect(() => {
		if (modalVisible) {
			Animated.parallel([
				Animated.timing(backdropOpacity, {
					toValue: 1,
					duration: 500,
					useNativeDriver: true,
				}), // Slow fade in
				Animated.timing(translateY, {
					toValue: 0,
					duration: 500,
					easing: easeOutExpo,
					useNativeDriver: true,
				}), // Custom easing
			]).start();
		} else {
			Animated.parallel([
				Animated.timing(backdropOpacity, {
					toValue: 0,
					duration: 500,
					useNativeDriver: true,
				}),
				Animated.timing(translateY, {
					toValue: 300,
					duration: 500,
					easing: easeInExpo,
					useNativeDriver: true,
				}),
			]).start();
		}
	}, [modalVisible]);

	return (
		<>
			<Pressable
				style={styles.buttonContainer}
				onPress={() => setModalVisible(true)}
			>
				<Feather name="plus" size={20} />
			</Pressable>

			<Modal
				visible={modalVisible}
				transparent={true}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
				statusBarTranslucent={true}
			>
				<View style={styles.modalContentContainer}>
					<Animated.View
						style={[styles.modalContent, { transform: [{ translateY }] }]}
					>
						<View style={styles.modalHeader}>
							<Text style={styles.modalHeaderText}>Create task</Text>

							<Pressable
								style={styles.modalHeaderButton}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Feather name="x" size={20} color="#111" />
							</Pressable>
						</View>

						<View style={{ padding: 12, gap: 8 }}>
							<Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 16 }}>
								What to do?
							</Text>
							<TextInput
								style={{
									borderWidth: 1,
									borderRadius: 12,
									borderColor: 'rgba(0, 0, 0, .3)',
									fontFamily: 'Nunito-Regular',
									fontSize: 16,
								}}
								value={formValue}
								onChangeText={setFormValue}
							/>

							<Pressable
								style={{
									padding: 12,
									backgroundColor: '#111',
									borderRadius: 12,
									marginTop: 28,
									opacity: formValue.length === 0 ? 0.7 : 1,
								}}
								disabled={formValue.length === 0}
							>
								<Text
									style={{
										fontFamily: 'Nunito-SemiBold',
										fontSize: 16,
										color: '#fff',
										textAlign: 'center',
									}}
								>
									Save task
								</Text>
							</Pressable>
						</View>
					</Animated.View>
				</View>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		width: 48,
		height: 48,
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalContentContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'stretch',
		backgroundColor: `rgba(0, 0, 0, .3)`,
	},
	modalContent: {
		backgroundColor: '#fff',
		borderRadius: 20,
		paddingBottom: 24,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
	},
	modalHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: 'rgba(0, 0, 0, .1)',
		padding: 12,
	},
	modalHeaderText: {
		fontFamily: 'Nunito-Bold',
		fontSize: 16,
		color: '#111',
	},
	modalHeaderButton: {
		width: 40,
		height: 40,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: 'rgba(0, 0, 0, .2)',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
