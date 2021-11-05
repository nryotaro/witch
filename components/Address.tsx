import useAddress from '../hooks/useAddress';
import styles from '../styles/Address.module.css';
import InputText from './InputText';

interface Props {
	setValidForm: (valid: boolean) => void,
	email: string,
	setEmail: (email: string) => void,
}

export default function Address(props: Props) {
	const emailError = useAddress(props.setValidForm, props.email);
	return <div className={styles.container}>
		<InputText value={props.email}
			setValue={props.setEmail}
			placeholder={'Email'}
			inputType={'email'}
			errorMessage={emailError} />
	</div>
}
