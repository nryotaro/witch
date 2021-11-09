import InputText from './InputText';
import { useName } from '../hooks/useName';
import styles from './Name.module.css';

interface Props {
	setValidForm: (valid: boolean) => void,
	firstName: string,
	setFirstName: (firstName: string) => void,
	lastName: string,
	setLastName: (lastName: string) => void,
}

export default function Name(
	{setValidForm, firstName, setFirstName, lastName, setLastName}: Props) {
	const [firstNameError, lastNameError] = useName(
		setValidForm, firstName, lastName);

	return <div className={styles.container}>
		<InputText text={firstName}
			setText={setFirstName}
			placeholder={'First Name'}
			inputType={'text'}
			errorMessage={firstNameError} />
		<InputText text={lastName}
			setText={setLastName}
			placeholder={'Last Name'}
			inputType={'text'}
			errorMessage={lastNameError} />
	</div>
}