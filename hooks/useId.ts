import { asErrorMessage, checkPassword, checkUserName } from '../libs/validation';


export function useId(userName: string, password: string) {
	const nameError = asErrorMessage(checkUserName(userName));
	const passwordError = asErrorMessage(checkPassword(password));
	return [nameError, passwordError];

}