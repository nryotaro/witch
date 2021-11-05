import { useState } from 'react';
import { StepId, mapStepIds } from '../libs/profile';

export interface WizardState {
	stepTitles: { title: string, stepId: StepId }[]
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
}

export function useWizard(): WizardState {
	const titles: { [key in StepId]: string } = {
		'name': 'Name',
		'email': 'Email',
		'confirmation': 'Confirmation',
	};

	const [currentIndex, setCurrentIndex] = useState(0);
	const [validForm, setValidForm] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	const stepTitles = mapStepIds(
		(stepId) => { return { title: titles[stepId], stepId } });
	return {
		stepTitles,
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
	};
}