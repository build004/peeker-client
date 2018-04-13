import firebase from 'firebase';

import config from '../firebaseConfig';

firebase.initializeApp(config);

const requestPost = (email: string, password: string): Promise<void> => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			console.log('SignUp Success!');
		})
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(error);
		});
};

export default requestPost;
