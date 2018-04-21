import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text, SocialIcon } from 'react-native-elements';
import { Formik, FormikProps, FormikActions } from 'formik';

import * as api from '../../service/api/auth';

import TextInput from '../../FormikReactNativeTextInput';

interface FormValues {
	email: string;
	password: string;
}

export default class SignUp extends React.Component<{}> {
	render() {
		return (
			<View style={styles.container}>
				<Text h3>Sign Up</Text>
				<Formik
					onSubmit={(values: FormValues) => {
						console.log(values);
						api.signUp(values.email, values.password);
					}}
					render={(props: FormikProps<FormValues>) => (
						<View>
							<TextInput
								name="email"
								onChangeText={props.setFieldValue}
								value={props.values.email}
								autoCapitalize="none"
								keyboardType="email-address"
							/>
							<TextInput
								name="password"
								onChangeText={props.setFieldValue}
								value={props.values.password}
								secureTextEntry
								autoCapitalize="none"
							/>
							<Button title="submit" onPress={props.handleSubmit} />
						</View>
					)}
				/>
				<SocialIcon
					title="Sign Up With Facebook"
					button
					type="facebook"
					style={{ padding: 15 }}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
