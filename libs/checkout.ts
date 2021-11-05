
export const ShippingStepId = 'shipping';
export const AddressStepId = 'address';
export const ConfirmationStepId = 'confirmation';

export type StepId = typeof ShippingStepId | typeof AddressStepId | typeof ConfirmationStepId;

export function mapStepIds<T>(stepIdHandler: (stepId: StepId, index: number) => T): T[] {
	return stepOrders.map(stepIdHandler);
}

export function isLastIndex(index: number): boolean {
	return index === stepOrders.length - 1;
}

const stepOrders: StepId[] = [ShippingStepId, AddressStepId, ConfirmationStepId];



