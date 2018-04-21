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
				style={{ height: 40, width: 400 }}
				onChangeText={this.handleChange}
				ref={input => otherProps.inputRef && otherProps.inputRef(input)}
				{...otherProps} // IRL, you should be more explicit when using TS
			/>
		);
	}
}
