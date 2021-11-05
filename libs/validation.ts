export type Validator<T> = (value: T) => true | string;

export function isNotEmpty(value: string): boolean {
	return 0 < value.length;
}

export function isEqualOrGreaterThan(value: string, size: number): boolean {
	return size <= value.length;
}

export function isValidateEmail(email: string): boolean {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}


export function compositeValidator<T>(validators: ((value: T) => (true | string))[]): Validator<T> {
	return (value: T) => {
		for (const validator of validators) {
			const result = validator(value);
			if (result != true)
				return result;
		}
		return true;
	};
}

export function asErrorMessage(result: true | string): null | string {
	return result === true ? null : result;
}