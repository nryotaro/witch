import styles from './Confirmation.module.css';

interface Props {
	firstName: string,
	lastName: string,
	email: string,
}

export default function Confirmation({ firstName, lastName, email }: Props) {
	return <dl className={styles.container}>
		<dt>First name</dt>
		<dd>{firstName}</dd>
		<dt>Last name</dt>
		<dd>{lastName}</dd>
		<dt>Email</dt>
		<dd>{email}</dd>
	</dl>
}