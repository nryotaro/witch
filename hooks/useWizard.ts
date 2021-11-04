import { useState } from 'react';
import { StepId, mapStepIds } from '../libs/checkout';

export interface WizardState {
	stepTitles: { title: string, stepId: StepId }[]
	currentIndex: number,
	userName: string,
	setUserName: (userName: string) => void,
	password: string,
	setPassword: (password: string) => void,
	email: string,
	setEmail: (email: string) => void,
}

export function useWizard(): WizardState {
	const titles: { [key in StepId]: string } = {
		'shipping': 'Shipping',
		'payment': 'Payment',
		'confirmation': 'Confirmation',
	};

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	const stepTitles = mapStepIds(
		(stepId) => { return { title: titles[stepId], stepId } });
	return {
		stepTitles,
		currentIndex: 0,
		userName,
		setUserName,
		password,
		setPassword,
		email,
		setEmail,
	};
}