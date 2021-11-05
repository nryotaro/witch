import styles from './Layout.module.css';

interface Props {
	children: JSX.Element | JSX.Element[],
}

export default function Layout({ children }: Props) {
	return <div className={styles.container}>
		{children}
	</div>
}