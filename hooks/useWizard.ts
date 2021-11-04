import { StepId, mapStepIds } from '../libs/checkout';

export interface WizardState {
	stepTitles: { title: string, stepId: StepId }[]
	currentIndex: number,
}

export function useWizard(): WizardState {
	const titles: { [key in StepId]: string } = {
		'shipping': 'Shipping',
		'payment': 'Payment',
		'confirmation': 'Confirmation',
	};
	const stepTitles = mapStepIds((stepId) => { return { title: titles[stepId], stepId } });
	return {
		stepTitles,
		currentIndex: 0,
	};
}