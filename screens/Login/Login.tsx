
import * as React from 'react';
import { StyleSheet, View , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text, SocialIcon } from 'react-native-elements';
import { Formik, FormikProps, FormikActions } from 'formik';
import Container from '../../styles/grid'
import {Title, Label} from './Login.style'
import TextInput from '../../FormikReactNativeTextInput';
import * as api from '../../service/api/auth';

interface FormValues {
    email: string;
    password: string;
}

export default class Login extends React.Component<{}> {
	render() {
		return (
			<Container>
                {/* 헤더 */}
                <View style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',  
                }}>
                    <TouchableOpacity>
                        <Text>X</Text>
                    </TouchableOpacity>
                     
                </View>
                {/* 타이틀 */}
                <Title>로그인</Title>
              
                 <Formik
                    onSubmit={(values: FormValues)=>{
                        console.log(values);
						api.login(values.email, values.password);
                    }}
                    render={(props: FormikProps<FormValues>)=>(
                        <View>
                            <Text>이메일 주소</Text>
                            <TextInput
                            name="email"
                            onChangeText={props.setFieldValue}
                            value={props.values.email}
                            placeholder={'이메일 주소를 입력해주세요'}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            returnKeyType="next"
                            autoCorrect={false}
                            />
                            <Text>비밀번호</Text>
                            <TextInput
                             name='password'
                             onChangeText={props.setFieldValue}
                             value={props.values.password}
                             placeholder={'비밀번호를 입력해주세요'}
                             secureTextEntry
                             returnKeyType="go"
                            />
                            <TouchableOpacity onPress={props.handleSubmit}>
                            <Text>로그인</Text>
                            </TouchableOpacity>  
                     </View>
                    )}
                 
                 />  

                   
            </Container>
		);
	}
}

