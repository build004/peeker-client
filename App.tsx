import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Text, SocialIcon } from 'react-native-elements';
import Signup from './screens/Signup/Signup';
import Login from './screens/Login/Login';

class App extends Component<{}> {
	render() {
		return (
			<View style={styles.container}>
				{/* <Signup/> */}
				<Signup />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
