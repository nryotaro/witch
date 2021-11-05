import styles from '../styles/Shipping.module.css';
import InputText from './InputText';
import { useId } from '../hooks/useId';

interface Props {
	userName: string,
	setUsername: (userName: string) => void,
	password: string,
	setPassword: (password: string) => void,
}

export default function Shipping(props: Props) {
	const [nameError, passwordError] = useId(
		props.userName, props.password);
	return <div className={styles.container}>
		<InputText value={props.userName}
			setValue={props.setUsername}
			placeholder={'Username'}
			inputType={'text'}
			errorMessage={nameError} />
		<InputText value={props.password}
			setValue={props.setPassword}
			placeholder={'Password'}
			inputType={'password'}
			errorMessage={passwordError} />
	</div>
}