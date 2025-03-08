import { useState } from 'react';
import {
	Modal,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

import { Plus, X } from 'lucide-react-native';

export default function CreateTaskModal() {
	const [modalVisible, setModalVisible] = useState<boolean>(false);

	const showModal = () => setModalVisible(true);
	const hideModal = () => setModalVisible(false);

	return (
		<>
			<Pressable style={styles.buttonContainer} onPress={showModal}>
				<Plus color="#111" size={20} />
			</Pressable>

			<Modal
				animationType="slide"
				visible={modalVisible}
				transparent
				statusBarTranslucent
				presentationStyle="overFullScreen"
				onDismiss={hideModal}
				onRequestClose={hideModal}
			>
				<View style={styles.modalContentContainer}>
					<View style={styles.modalContent}>
						<View style={styles.modalHeader}>
							<Text style={styles.modalHeaderText}>Create task</Text>

							<Pressable
								style={styles.modalHeaderButton}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<X size={20} color="#111" />
							</Pressable>
						</View>

						<Form />
					</View>
				</View>
			</Modal>
		</>
	);
}

function Form() {
	const [formValue, setFormValue] = useState<string>('');

	return (
		<View style={{ padding: 12, gap: 8 }}>
			<Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 16 }}>
				What to do?
			</Text>
			<TextInput
				style={{
					borderWidth: 1,
					borderRadius: 12,
					borderColor: 'rgba(0, 0, 0, .2)',
					fontFamily: 'Nunito-Regular',
					fontSize: 16,
				}}
				value={formValue}
				onChangeText={setFormValue}
			/>
			<Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 16 }}>
				Priority
			</Text>
			<TextInput
				style={{
					borderWidth: 1,
					borderRadius: 12,
					borderColor: 'rgba(0, 0, 0, .2)',
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
	},
	modalContent: {
		backgroundColor: '#fff',
		borderRadius: 20,
		paddingBottom: 24,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		boxShadow: '10px 10px 10px rgba(0, 0, 0, .5)',
		borderWidth: 1,
		borderColor: 'rgba(141, 141, 141, 0.1)',
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
