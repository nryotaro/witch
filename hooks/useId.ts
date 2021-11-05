import { useEffect } from 'react';
import { asErrorMessage, checkPassword, checkUserName } from '../libs/validation';


export function useId(
	setValidForm: (valid: boolean) => void,
	userName: string, password: string) {
	const nameError = asErrorMessage(checkUserName(userName));
	const passwordError = asErrorMessage(checkPassword(password));
	useEffect(() => {
		setValidForm(nameError === null && passwordError === null);
		console.log('doge');
	}, [nameError, passwordError]);

	return [nameError, passwordError];

}