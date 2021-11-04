import { useWizard, WizardState } from '../hooks/useWizard';
import styles from '../styles/Wizard.module.css';
import Progress from './progress';

function Wizard() {
	const wizard: WizardState = useWizard();
	return <div className={styles.container}>
		<h1 className={styles.title}>Checkout</h1>
		<Progress steps={wizard.stepProps} stepIndex={wizard.stepIndex} />
		<div>b</div>
	</div>
}

export default Wizard;