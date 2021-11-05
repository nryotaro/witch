import styles from '../styles/InputText.module.css';
interface Props {
	value: string,
	setValue: (value: string) => void,
	placeholder: string,
	inputType: 'text' | 'password' | 'email',
	errorMessage: string | null,
}

export default function InputText<T>({ value, inputType, setValue, placeholder, errorMessage }: Props) {
	const warning = errorMessage === null ? <></> : <p>{errorMessage}</p>
	return <>
		<input
			className={styles.input}
			type={inputType}
			placeholder={placeholder}
			value={value}
			onChange={(event) => setValue(event.target.value)}
		/>
		{warning}
	</>
}