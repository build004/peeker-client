import styled from 'styled-components/native';
import { Text } from '../../styles/text';
import  Container  from '../../styles/grid';
import React, { Component } from 'react';
import { Linking } from 'react-native';
// export const SignupContainer = ()=>(
// 	<Container>
// 		<LinearGradient
// 		colors={['#4c669f', '#3b5998', '#192f6a']}
// 		style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}
// 		>
// 		</LinearGradient>
// 	</Container>
// )



const TouchableOpacity = styled.TouchableOpacity`
 background-color: transparent;
 width: 144px;
 height: 40px;
 border-width: 1px;
 border-radius: 3px;
 border-color: #fff;
 display: flex;
 justify-content: center;
 align-items: center;
`
const ButtonText = styled.Text`
 font-size: 17px;
 color: #fff;
`
export const FlexRow = styled.View`
 display: flex;
 flex-direction: row;
 justify-content: ${props=>(props.spaceBetween ? "space-between" : props.center ? "cneter": "flex-start")};
 margin-bottom: 39px;
`
interface TextButtonProps {
	label: string,
 }

export const TextButton: React.SFC<TextButtonProps> = (props)=> (
	<TouchableOpacity>
		<ButtonText>{props.label}</ButtonText>
	</TouchableOpacity>
)

interface AnchorProps {
	url: string,
	text: string
	color: string,
 }

export const Anchor:React.SFC<AnchorProps> = (props)=> (
	<Text style={{
		color: props.color, textDecorationLine: 'underline', fontSize: 11,
	}}
		onPress={() => Linking.openURL(props.url)}>
		{props.text}
	</Text>
)

export const Title = styled(Text)`
	font-size: 40px;
	color: #fff;
	letter-spacing: 0.83;
	line-height: 52px;
	margin-bottom: 16px;
`;

export const Label = styled(Text)`
	font-size: 13px;
	line-height: 14px;
	color: #fff;
	margin-bottom: 8px;
`;
