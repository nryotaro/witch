import { useState } from 'react';
import { StepId, mapStepIds } from '../libs/profile';

export interface WizardState {
	stepTitles: StepTitle[],
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

export interface StepTitle {
	title: string,
	stepId: StepId,
}

export function useWizard(): WizardState {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [validForm, setValidForm] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	const titles: { [key in StepId]: string } = {
		'name': 'Name',
		'email': 'Email',
		'confirmation': 'Confirmation',
	};

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