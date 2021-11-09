import useEmail from '../hooks/useEmail';
import InputText from './InputText';

interface Props {
	setValidForm: (valid: boolean) => void,
	email: string,
	setEmail: (email: string) => void,
}

export default function Email(props: Props) {
	const [confirmEmail, setConfirmEmail, emailError, confirmEmailError] =
		useEmail(props.setValidForm, props.email);

	return <div>
		<InputText text={props.email}
			setText={props.setEmail}
			placeholder={'Email'}
			inputType={'email'}
			errorMessage={emailError} />
		<InputText text={confirmEmail}
			setText={setConfirmEmail}
			placeholder={'Confirm email'}
			inputType={'email'}
			errorMessage={confirmEmailError} />
	</div>
}
