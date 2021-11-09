export type Validator<T> = (value: T) => true | string;

export function isNotEmpty(value: string): boolean {
	return 0 < value.length;
}

export function isEqualOrGreaterThan(value: string, size: number): boolean {
	return size <= value.length;
}

export function isValidEmail(email: string): boolean {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

export function compositeValidators<T>(
	validators: [(value: T) => boolean, string][]): (value: T) => (string | null) {
	return (value: T) => {
		for (const [validator, errorMessage] of validators) {
			const result = validator(value);
			if (!result)
				return errorMessage;
		}
		return null;
	}
}
