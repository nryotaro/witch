import { Validator, compositeValidator, isNotEmpty, isEqualOrGreaterThan, isValidateEmail } from './validation';
const nameStepId = 'name';
const emailStepId = 'email';
const confirmationStepId = 'confirmation';

export interface UserProfile {
	firstName: string,
	lastName: string,
	email: string,
}

export type StepId = typeof nameStepId | typeof emailStepId | typeof confirmationStepId;

export function mapStepIds<T>(stepIdHandler: (stepId: StepId, index: number) => T): T[] {
	return stepOrders.map(stepIdHandler);
}

export function isLastIndex(index: number): boolean {
	return index === stepOrders.length - 1;
}

const stepOrders: StepId[] = [nameStepId, emailStepId, confirmationStepId];


export const checkName: Validator<string> = compositeValidator(
	[(value: string) => { return isNotEmpty(value) ? true : 'This field is required.' },
	(value: string) => {
		const min = 2;
		return isEqualOrGreaterThan(value, min) ? true : `Minimum ${min} characters is required.`
	}]);

export const checkEmail: Validator<string> = compositeValidator(
	[(value: string) => { return isNotEmpty(value) ? true : 'This field is required' },
	(value: string) => { return isValidateEmail(value) ? true : 'Please enter a valid email address.' }]
);

export function checkConfirmEmail(email: string): Validator<string> {
	return (confirmEmail: string) => {
		if (!isNotEmpty(confirmEmail))
			return 'This feild is required.';
		return email === confirmEmail ? true : `Your emails don't match.`;
	}
}

export async function submitProfile(
	firstName: string, lastName: string, email: string,
	sender: (profile: UserProfile) => Promise<boolean>,
	proceed: () => void) {
	if (await (sender({ firstName, lastName, email })))
		proceed();
}