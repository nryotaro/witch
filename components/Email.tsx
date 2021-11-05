import useEmail from '../hooks/useEmail';
import styles from './Email.module.css';
import InputText from './InputText';

interface Props {
	setValidForm: (valid: boolean) => void,
	email: string,
	setEmail: (email: string) => void,
}

export default function Email(props: Props) {
	const [confirmEmail, setConfirmEmail, emailError, confirmEmailError] =
		useEmail(props.setValidForm, props.email);

	return <div className={styles.container}>
		<InputText value={props.email}
			setValue={props.setEmail}
			placeholder={'Email'}
			inputType={'email'}
			errorMessage={emailError} />
		<InputText value={confirmEmail}
			setValue={setConfirmEmail}
			placeholder={'Confirm email'}
			inputType={'email'}
			errorMessage={confirmEmailError} />
	</div>
}
