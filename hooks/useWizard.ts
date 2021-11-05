import { useState } from 'react';
import { StepId, mapStepIds } from '../libs/checkout';

export interface WizardState {
	stepTitles: { title: string, stepId: StepId }[]
	currentIndex: number,
	setCurrentIndex: (currentIndex: number) => void,
	validForm: boolean,
	setValidForm: (valid: boolean) => void,
	userName: string,
	setUserName: (userName: string) => void,
	password: string,
	setPassword: (password: string) => void,
	email: string,
	setEmail: (email: string) => void,
}

export function useWizard(): WizardState {
	const titles: { [key in StepId]: string } = {
		'name': 'Name',
		'address': 'Address',
		'confirmation': 'Confirmation',
	};

	const [currentIndex, setCurrentIndex] = useState(0);
	const [validForm, setValidForm] = useState(false);
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	const stepTitles = mapStepIds(
		(stepId) => { return { title: titles[stepId], stepId } });
	return {
		stepTitles,
		currentIndex,
		setCurrentIndex,
		validForm,
		setValidForm,
		userName,
		setUserName,
		password,
		setPassword,
		email,
		setEmail,
	};
}