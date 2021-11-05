import { useEffect } from 'react';
import { asErrorMessage, } from '../libs/validation';
import { checkName, } from '../libs/profile';


export function useName(
	setValidForm: (valid: boolean) => void,
	firstName: string, lastName: string) {
	const firstNameError = asErrorMessage(checkName(firstName));
	const lastNameError = asErrorMessage(checkName(lastName));

	const errors = [firstNameError, lastNameError];

	useEffect(() => {
		setValidForm(firstNameError === null && lastNameError === null);
	}, errors);

	return errors;

}