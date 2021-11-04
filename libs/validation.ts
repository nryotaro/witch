
export type Validator<T> = (value: T) => true | string

export const checkUserName: Validator<string> = (username: string) => {
	const minimumLength = 2;
	if(username.length == 0)
		return 'This field is required';
	if(username.length <= minimumLength)
		return `Minimum ${minimumLength} characters is required.`;
	return true;
}