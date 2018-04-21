import requestPost from '../../utils/request';

export function signUp(email: string, password: string) {
	requestPost(email, password);
}

export function login(email: string, password: string) {
	requestPost(email, password);
}