import { useEffect } from "react";
import { asErrorMessage, checkEmail } from "../libs/validation";


export default function useAddress(setValidForm: (
	valid: boolean) => void, email: string) {
	const emailError = asErrorMessage(checkEmail(email));
	useEffect(() => {
		setValidForm(emailError === null);
	}, [emailError]);
	return emailError;
}