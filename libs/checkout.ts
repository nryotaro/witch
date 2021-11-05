const NameStepId = 'name';
const AddressStepId = 'address';
const ConfirmationStepId = 'confirmation';

export type StepId = typeof NameStepId | typeof AddressStepId | typeof ConfirmationStepId;

export function mapStepIds<T>(stepIdHandler: (stepId: StepId, index: number) => T): T[] {
	return stepOrders.map(stepIdHandler);
}

export function isLastIndex(index: number): boolean {
	return index === stepOrders.length - 1;
}

const stepOrders: StepId[] = [NameStepId, AddressStepId, ConfirmationStepId];



