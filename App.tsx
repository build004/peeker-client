import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text, SocialIcon } from 'react-native-elements';
import { Formik, FormikProps, FormikActions } from 'formik';
import Signup from './screens/Signup/Signup';

import * as api from './service/api/auth';

import TextInput from './FormikReactNativeTextInput';

interface FormValues {
	email: string;
	password: string;
}

export default class App extends React.Component<{}> {
	render() {
		return (
			<View style={styles.container}>
				<Signup/>
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
