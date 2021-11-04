import styles from '../styles/Shipping.module.css';
import InputText from './InputText';
import { checkUserName } from '../libs/validation';

interface Props {
	userName: string,
	setUsername: (userName: string) => void,
	password: string,
	setPassword: (password: string) => void,
}

export default function Shipping(props: Props) {
	return <div className={styles.container}>
		<InputText value={props.userName}
			setValue={props.setUsername}
			placeholder={'Username'}
			inputType={'text'}
			validate={checkUserName}/>
	</div>
}