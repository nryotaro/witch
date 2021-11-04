import { useWizard } from '../hooks/useWizard';
import styles from '../styles/Wizard.module.css';
import Progress from './progress';

function Wizard() {
	const wizard = useWizard();
	return <div className={styles.container}>
		<h1>Checkout</h1>
		<Progress/>
		<div>b</div>
	</div>
}

export default Wizard;