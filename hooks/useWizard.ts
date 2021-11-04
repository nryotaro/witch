import { StepProps } from "../components/step";

export interface WizardState {
	stepProps: StepProps[],
	stepIndex: number,
}

export function useWizard(): WizardState {
	const stepProps = [
		{ title: 'Shipping', stepId: 'shipping' },
		{ title: 'Payment', stepId: 'payment' },
		{ title: 'Confirmation', stepId: 'confirmation' },
	];
	return {
		stepProps,
		stepIndex: 0,
	};
}