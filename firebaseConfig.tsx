interface Config {
	apiKey: string;
	authDomain: string;
	databaseURL: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
}

const config: Config = {
	apiKey: 'AIzaSyBGmP_7p2CcnVipZrvik32HmzQCMrATeac',
	authDomain: 'peeker-front-ts.firebaseapp.com',
	databaseURL: 'https://peeker-front-ts.firebaseio.com',
	projectId: 'peeker-front-ts',
	storageBucket: '',
	messagingSenderId: '445998429659',
};

export default config;
