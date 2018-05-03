import React from 'react';
import { TextInput } from 'react-native';

export default class FormikReactNativeTextInput extends React.Component<{}> {
	handleChange = (value: string) => {
		// remember that onChangeText will be Formik's setFieldValue
		this.props.onChangeText(this.props.name, value);
	};

	render() {
		// we want to pass through all the props except for onChangeText
		const { onChangeText, ...otherProps } = this.props;
		return (
			<TextInput
				style={{ 
				width: '100%', height: 48, backgroundColor: '#fff', borderRadius: 3,
				paddingLeft: 17, paddingRight: 38, marginBottom: 16,}}
				onChangeText={this.handleChange}
				placeholderTextColor='#90bbcd'
				ref={input => otherProps.inputRef && otherProps.inputRef(input)}
				{...otherProps} // IRL, you should be more explicit when using TS
			/>
		);
	}
}
