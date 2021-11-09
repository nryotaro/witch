import { useEffect } from 'react';
import { checkName, } from '../libs/profile';


export function useName(
	setValidForm: (valid: boolean) => void,
	firstName: string, lastName: string) {
	const firstNameError = checkName(firstName);
	const lastNameError = checkName(lastName);

	const errors = [firstNameError, lastNameError];
	useEffect(() => {
		setValidForm(firstNameError === null && lastNameError === null);
	}, errors);

	return errors;

}