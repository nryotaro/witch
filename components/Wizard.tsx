import { useWizard, WizardState } from '../hooks/useWizard';
import Footer from './Footer';
import Form from './Form';
import Progress from './Porgress';
import styles from './Wizard.module.css';

export default function Wizard() {
	const wizard: WizardState = useWizard();
	return <div className={styles.container}>
		<h1 className={styles.title}>Wizard</h1>
		<Progress stepTitles={wizard.stepTitles} currentIndex={wizard.currentIndex} />
		<Form wizardState={wizard} />
		<Footer {...wizard}/>
	</div>
}
