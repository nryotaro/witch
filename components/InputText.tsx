import styles from './InputText.module.css';
interface Props {
	text: string,
	setText: (value: string) => void,
	placeholder: string,
	inputType: 'text' | 'email',
	errorMessage: string | null,
}

export default function InputText<T>(
	{ text: text, inputType, setText: setText, placeholder, errorMessage }: Props) {
	const validation = errorMessage === null ? styles.valid : styles.invalid;
	return <div className={`${styles.container} ${validation}`}>
		<input
			className={styles.input}
			type={inputType}
			placeholder={placeholder}
			value={text}
			onChange={(event) => setText(event.target.value)} />
		<p className={styles.errorMessage}>{errorMessage}</p>
	</div>
}