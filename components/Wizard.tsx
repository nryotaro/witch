import { useWizard, WizardState } from '../hooks/useWizard';
import styles from './Wizard.module.css';
import Footer from './Footer';
import Form from './Form';
import Progress from './Porgress';


function Wizard() {
	const wizard: WizardState = useWizard();
	return <div className={styles.container}>
		<h1 className={styles.title}>Wizard</h1>
		<Progress stepTitles={wizard.stepTitles} currentIndex={wizard.currentIndex} />
		<Form wizardState={wizard} />
		<Footer {...wizard}/>
	</div>
}

export default Wizard;