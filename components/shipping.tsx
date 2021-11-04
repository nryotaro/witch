import styles from '../styles/Shipping.module.css';
interface Props {
}

export default function Shipping({ }: Props) {
	return <div className={styles.container}>
		<input className={styles.first} type='text' placeholder={'Username'} />
		<p></p>
		<input className={styles.first} type='password' placeholder={'Username'} />
	</div>
}