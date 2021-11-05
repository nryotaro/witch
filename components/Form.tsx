import { StepId } from '../libs/profile';
import { WizardState } from '../hooks/useWizard';
import Confirmation from './Confirmation';
import Email from './Email';
import Name from './Name';
import styles from './Form.module.css';

interface Props {
	wizardState: WizardState,
}

export default function Form({ wizardState }: Props) {
	const forms: { [key in StepId]: JSX.Element } = {
		'name': <Name {...wizardState} />,
		'email': <Email {...wizardState} />,
		'confirmation': <Confirmation {...wizardState} />,
	};
	const stepTitle = wizardState.stepTitles[wizardState.currentIndex];
	return <div className={styles.container}>
		<h2 className={styles.caption}>{stepTitle.title}</h2>
		{forms[stepTitle.stepId]}
	</div>
}