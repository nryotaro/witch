
export const ShippingStepId = 'shipping';
export const PaymentStepId = 'payment';
export const ConfirmationStepId = 'confirmation';

export type StepId = typeof ShippingStepId | typeof PaymentStepId | typeof ConfirmationStepId;

export function mapStepIds<T>(stepIdHandler: (stepId: StepId, index: number) => T): T[] {
	return stepOrders.map(stepIdHandler);
}

export function isLastIndex(index: number): boolean {
	return index === stepOrders.length;
}

const stepOrders: StepId[] = [ShippingStepId, PaymentStepId, ConfirmationStepId];




