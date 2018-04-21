import requestPost from '../../utils/request';

export function signUp(
	email: string,
	password: string,
	nickname: string,
	birthDate: number
) {
	requestPost(email, password, nickname, birthDate);
}

export function login(email: string, password: string) {
	requestPost(email, password);
}