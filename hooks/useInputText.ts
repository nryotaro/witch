import { useState } from 'react';
import { Validator } from '../libs/validation';


function createOnChange(
	setText: (text: string) => void,
	visibility: boolean,
	setVisibility: (visibility: boolean) => void
) {
	return (text: string) => {
		const result = validate(text);
		if (typeof result === 'string') {
			if (!visibility)
				setVisibility(true);
		}
		setText(text);
	}
}

export function useInputText(errorMessage?: string) {
	const [errorVisibility, setErrorVisibility] = useState(false);
	return [errorMessageVisibility, createOnChange()];
}