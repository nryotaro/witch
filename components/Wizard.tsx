import { StepId, OrderSteps } from '../libs/profile';
import Confirmation from './Confirmation';
import Email from './Email';
import Footer from './Footer';
import Name from './Name';
import Progress from './Porgress';
import { useWizard, WizardState } from '../hooks/useWizard';
import styles from './Wizard.module.css';

export default function Wizard() {
	const [wizard, orderStepIds]: [WizardState, OrderSteps] = useWizard();
	const contents: { [stepId in StepId]: Content } = {
		'name': { title: 'Name', content: <Name {...wizard} /> },
		'email': { title: 'Email', content: <Email {...wizard} /> },
		'confirmation': { title: 'Confirmation', content: <Confirmation {...wizard} /> }
	}
	const orderedContents = orderStepIds(
		(stepId: StepId) => { return { ...contents[stepId], stepId, } });
	const current = orderedContents[wizard.currentIndex];

	return <div className={styles.container}>
		<h1 className={styles.title}>Wizard</h1>
		<Progress stepTitles={orderedContents} currentIndex={wizard.currentIndex} />
		<div className={styles.content}>
			<h2 className={styles.formTitle}>{current.title}</h2>
			{current.content}
		</div>
		<Footer {...wizard} />
	</div>
}

interface Content {
	title: string,
	content: JSX.Element,
}