import requestPost from '../../utils/request';

export function signUp(email: string, password: string) {
	requestPost(email, password);
}
