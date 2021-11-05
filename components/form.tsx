import { StepId } from '../libs/checkout';
import { WizardState } from '../hooks/useWizard';
import Confirmation from './confirmation';
import Address from './Address';
import Shipping from './shipping';
import styles from '../styles/Form.module.css';

interface Props {
	wizardState: WizardState,
}

export default function Form({ wizardState }: Props) {
	const forms: { [key in StepId]: JSX.Element } = {
		'name': <Shipping {...wizardState} />,
		'address': <Address {...wizardState} />,
		'confirmation': <Confirmation {...wizardState} />,
	};
	const stepTitle = wizardState.stepTitles[wizardState.currentIndex];
	return <div className={styles.container}>
		<h2 className={styles.caption}>{stepTitle.title}</h2>
		{forms[stepTitle.stepId]}
	</div>
}