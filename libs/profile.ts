import {
	isNotEmpty, isEqualOrGreaterThan, isValidEmail, compositeValidators
} from './validation';

export interface UserProfile {
	firstName: string,
	lastName: string,
	email: string,
}

const nameStepId = 'name';
const emailStepId = 'email';
const confirmationStepId = 'confirmation';

export type StepId = typeof nameStepId | typeof emailStepId | typeof confirmationStepId;
const stepOrders: StepId[] = [nameStepId, emailStepId, confirmationStepId];

export type OrderSteps = <T>(stepIdHandler: (stepId: StepId, index: number) => T) => T[];
export const orderSteps: OrderSteps =
	<T>(stepIdHandler: (stepId: StepId, index: number) => T) => stepOrders.map(stepIdHandler);

export function isLastIndex(index: number): boolean {
	return index === stepOrders.length - 1;
}

export function checkName(name: string): null | string {
	const threshold = 2;
	return compositeValidators([
		[isNotEmpty, 'This field is required.'],
		[(text: string) => isEqualOrGreaterThan(text, threshold), `Minimum ${threshold} characters is required.`]])
		(name);
}

export function checkEmail(email: string): null | string {
	return compositeValidators([
		[isNotEmpty, 'This field is required.'],
		[isValidEmail, 'Please enter a valid email address.'],
	])(email);
}

export function checkConfirmEmail(email: string, confirmEmail: string): null | string {
	return compositeValidators([
		[isNotEmpty, 'This feild is required.'],
		[(confirm: string) => { return email === confirm }, `Your emails don't match.`]
	])(confirmEmail);
}

export async function submitProfile(
	firstName: string, lastName: string, email: string,
	sender: (profile: UserProfile) => Promise<boolean>,
	proceed: () => void) {
	if (await (sender({ firstName, lastName, email })))
		proceed();
}