import { StepProps } from "../components/step";

export interface WizardState {
	stepProps: StepProps[],
	currentStepId: string,
}

export function useWizard(): WizardState {
	const stepProps = [
		{ title: 'Shipping', stepId: 'shipping' },
		{ title: 'Payment', stepId: 'payment' },
		{ title: 'Confirmation', stepId: 'confirmation' },
	];
	return {
		stepProps,
		currentStepId: stepProps[0].stepId,
	};
}