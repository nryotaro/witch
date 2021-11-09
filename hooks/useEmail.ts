import { useEffect, useState } from 'react';
import { checkConfirmEmail, checkEmail } from '../libs/profile';


export default function useEmail(
	setValidForm: (valid: boolean) => void, email: string, confirmEmail: string):
	[string | null,  string | null] {
	const emailError = checkEmail(email);
	const confirmEmailError = checkConfirmEmail(email, confirmEmail);

	useEffect(() => {
		setValidForm(emailError === null && confirmEmailError === null);
	}, [emailError, confirmEmailError]);

	return [emailError, confirmEmailError];
}