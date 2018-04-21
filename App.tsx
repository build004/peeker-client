import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text, SocialIcon } from 'react-native-elements';
import { Formik, FormikProps, FormikActions } from 'formik';

import * as api from './service/api/auth';

import TextInput from './FormikReactNativeTextInput';

interface FormValues {
	email: string;
	password: string;
	nickname: string;
	birthDate: number;
}

class App extends Component<{}> {
	render() {
		return (
			<View style={styles.container}>
				<Text h3>Sign Up</Text>
				<Formik
					onSubmit={(values: FormValues) => {
						console.log(values);
						api.signUp(
							values.email,
							values.password,
							values.nickname,
							values.birthDate
						);
					}}
					render={(props: FormikProps<FormValues>) => (
						<View>
							<Text>계정 만들기</Text>
							<Text>이메일 주소</Text>
							<TextInput
								name="email"
								onChangeText={props.setFieldValue}
								value={props.values.email}
								autoCapitalize="none"
								keyboardType="email-address"
								autofocus
								returnKeyType="next"
								onSubmitEditing={() => {
									this.password.focus();
								}}
								blurOnSubmit={false}
								placeholder="이메일 주소를 입력해주세요"
							/>
							<Text>비밀번호</Text>
							<TextInput
								name="password"
								onChangeText={props.setFieldValue}
								value={props.values.password}
								secureTextEntry
								autoCapitalize="none"
								placeholder="비밀번호를 입력해주세요"
								returnKeyType="next"
								onSubmitEditing={() => {
									this.nickname.focus();
								}}
								inputRef={input => {
									this.password = input;
								}}
							/>
							<Text>닉네임</Text>
							<TextInput
								name="nickname"
								onChangeText={props.setFieldValue}
								value={props.values.nickname}
								autoCapitalize="none"
								placeholder="앱에서 사용할 닉네임을 입력해주세요"
								returnKeyType="next"
								onSubmitEditing={() => {
									this.birthDate.focus();
								}}
								inputRef={input => {
									this.nickname = input;
								}}
							/>
							<Text>생년월일</Text>
							<TextInput
								name="birthDate"
								onChangeText={props.setFieldValue}
								value={props.values.birthDate}
								autoCapitalize="none"
								keyboardType="numeric"
								placeholder="예시 19970101"
								returnKeyType="done"
								inputRef={input => {
									this.birthDate = input;
								}}
							/>
							<Button title="가입하기" onPress={props.handleSubmit} />
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

export default App;
