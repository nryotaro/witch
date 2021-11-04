import { useWizard, WizardState } from '../hooks/useWizard';
import styles from '../styles/Wizard.module.css';
import Footer from './footer';
import Form from './form';
import Progress from './progress';


function Wizard() {
	const wizard: WizardState = useWizard();
	return <div className={styles.container}>
		<h1 className={styles.title}>Checkout</h1>
		<Progress steps={wizard.stepProps} stepIndex={wizard.stepIndex} />
		<Form wizardState={wizard}/>
		<Footer/>
	</div>
}

export default Wizard;