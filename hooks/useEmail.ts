import { useEffect, useState } from 'react';
import { checkConfirmEmail, checkEmail } from '../libs/profile';
import { asErrorMessage, } from '../libs/validation';


export default function useEmail(
	setValidForm: (valid: boolean) => void, email: string):
	[string, (email: string) => void, string | null, string | null] {
	const [confirmEmail, setConfirmEmail] = useState(email);
	const confirmEmailError = asErrorMessage(
		checkConfirmEmail(email)(confirmEmail));

	const emailError = asErrorMessage(checkEmail(email));
	useEffect(() => {
		setValidForm(emailError === null && confirmEmailError === null);
	}, [emailError, confirmEmailError]);

	return [confirmEmail, setConfirmEmail, emailError, confirmEmailError];
}