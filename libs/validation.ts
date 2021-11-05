type Validator<T> = (value: T) => true | string;

function isNotEmpty(value: string): boolean {
	return 0 < value.length;
}

function isEqualOrGreaterThan(value: string, size: number): boolean {
	return size <= value.length;
}

function compositeValidator(validators: ((value: string) => (true | string))[]): Validator<string> {
	return (value: string) => {
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

export const checkUserName: Validator<string> = compositeValidator(
	[(value: string) => { return isNotEmpty(value) ? true : 'This field is required' },
	(value: string) => {
		const min = 2;
		return isEqualOrGreaterThan(value, min) ? true : `Minimum ${min} characters is required.`
	}]);

export const checkPassword: Validator<string> = compositeValidator(
	[(value: string) => { return isNotEmpty(value) ? true : 'This field is required' },
	(value: string) => {
		const min = 2;
		return isEqualOrGreaterThan(value, min) ? true : `Minimum ${min} characters is required.`
	}]);

