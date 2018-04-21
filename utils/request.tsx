import firebase from 'firebase';

import config from '../firebaseConfig';

firebase.initializeApp(config);

const requestPost = (
	email: string,
	password: string,
	nickname: string,
	birthDate: number
): Promise<void> => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(res => {
			console.log('SignUp Success!!');
			console.log('res', res);
			const { uid, providerData } = res;
			firebase
				.database()
				.ref(`users/${uid}`)
				.set({
					nickname: nickname,
					birthDate: birthDate,
					providerData: providerData,
				});
		})
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log('error', error);
			console.log('errorCode', errorCode);
			console.log('errorMessage', errorMessage);
		});
};

export default requestPost;
