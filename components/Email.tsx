import useEmail from '../hooks/useEmail';
import InputText from './InputText';

interface Props {
	setValidForm: (valid: boolean) => void,
	email: string,
	setEmail: (email: string) => void,
	confirmEmail: string,
	setConfirmEmail: (email: string) => void,
}

export default function Email(props: Props) {
	const [emailError, confirmEmailError] =
		useEmail(props.setValidForm, props.email, props.confirmEmail);

	return <div>
		<InputText text={props.email}
			setText={props.setEmail}
			placeholder={'Email'}
			inputType={'email'}
			errorMessage={emailError} />
		<InputText text={props.confirmEmail}
			setText={props.setConfirmEmail}
			placeholder={'Confirm email'}
			inputType={'email'}
			errorMessage={confirmEmailError} />
	</div>
}
