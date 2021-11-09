import { useState } from 'react';
import { OrderSteps, orderSteps } from '../libs/profile';

export interface WizardState {
	currentIndex: number,
	setCurrentIndex: (currentIndex: number) => void,
	validForm: boolean,
	setValidForm: (valid: boolean) => void,
	firstName: string,
	setFirstName: (firstName: string) => void,
	lastName: string,
	setLastName: (lastName: string) => void,
	email: string,
	setEmail: (email: string) => void,
	confirmEmail: string,
	setConfirmEmail: (email: string) => void,
}

export function useWizard(): [WizardState, OrderSteps] {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [validForm, setValidForm] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [confirmEmail, setConfirmEmail] = useState(email);

	return [{
		currentIndex,
		setCurrentIndex,
		validForm,
		setValidForm,
		firstName,
		setFirstName,
		lastName,
		setLastName,
		email,
		setEmail,
		confirmEmail,
		setConfirmEmail,
	}, orderSteps];
}