import React, { Component, Fragment } from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Input, Button, Text, SocialIcon } from 'react-native-elements';
import { Formik, FormikProps, FormikActions } from 'formik';

import * as api from '../../service/api/auth';
import Container from '../../styles/grid';
import { Title, Label, TextButton, FlexRow, Anchor } from './Signup.style';

import TextInput from '../../FormikReactNativeTextInput';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo';



const ButtonContainer = styled.View`
	padding-top: 7px;
	padding-bottom: 16px;
`




interface FormValues {
	email: string;
	password: string;
	nickname: string;
	birthDate: number;
}

class SignUp extends Component<{}> {
	private password: HTMLInputElement;
	private nickname: HTMLInputElement;
	private birthDate: HTMLInputElement;

	render() {
		return (
			<Fragment>
				<LinearGradient
				colors={['#8650dc', '#00e19c']}
				style={{ flex: 1, 
					paddingLeft: 20, 
					paddingRight: 20, 
					paddingTop: 32,
					paddingBottom: 32,
				}}
				>
				{/* asset으로 교체 예정 */}
				<ButtonContainer>
					<TouchableOpacity>
						<Text style={{color: '#FFF', fontSize:24 }}>X</Text>
					</TouchableOpacity>
				</ButtonContainer>
				<Title>계정 만들기</Title>
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
							<Label>이메일 주소</Label>
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
							<Label>비밀번호</Label>
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
								inputRef={(input: any) => {
									this.password = input;
								}}
							/>
							<Label>닉네임</Label>
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
								inputRef={(input: any) => {
									this.nickname = input;
								}}
							/>
							<Label>생년월일</Label>
							<TextInput
								name="birthDate"
								onChangeText={props.setFieldValue}
								value={props.values.birthDate}
								autoCapitalize="none"
								keyboardType="numeric"
								placeholder="예시 19970101"
								returnKeyType="done"
								inputRef={(input: any) => {
									this.birthDate = input;
								}}
							/>
							<FlexRow spaceBetween>
								<TextButton label="여성"/>
								<TextButton label="남성"/>
							</FlexRow>
							<View style={{paddingLeft: 30, paddingRight:30}}>
								<Text style={{color: '#fff',lineHeight: 15, fontSize: 11, textAlign: 'center'}}>
									가입하기 버튼을 누름으로써, 
									<Anchor color="#fff" text="개인정보 보호 정책" url="https:google.com"/>과 
									<Anchor color="#fff" text="서비스 이용약관" url="https:google.com"/>
									에 모두 동의합니다
								</Text>
							</View>
							{/* <Button title="가입하기" onPress={props.handleSubmit} /> */}
						</View>
					)}
				/>
				{/* <SocialIcon
					title="Sign Up With Facebook"
					button
					type="facebook"
					style={{ padding: 15 }}
				/> */}
				{/* </View> */}
			</LinearGradient>		
			</Fragment>
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

export default SignUp;
