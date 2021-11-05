import { StepId } from '../libs/checkout';
import { WizardState } from '../hooks/useWizard';
import Confirmation from './confirmation';
import Payment from './payment';
import Shipping from './shipping';
import styles from '../styles/Form.module.css';

interface Props {
	wizardState: WizardState,
}

export default function Form({ wizardState }: Props) {
	const forms: { [key in StepId]: JSX.Element } = {
		'shipping': <Shipping {...wizardState} />,
		'payment': <Payment />,
		'confirmation': <Confirmation />,
	};
	const stepTitle = wizardState.stepTitles[wizardState.currentIndex];
	return <div className={styles.container}>
		<h2 className={styles.caption}>{stepTitle.title}</h2>
		{forms[stepTitle.stepId]}
	</div>
}