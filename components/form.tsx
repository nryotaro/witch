import { StepId } from '../libs/checkout';
import { WizardState } from '../hooks/useWizard';
import Confirmation from './confirmation';
import Payment from './payment';
import Shipping from './shipping';

interface Props {
	wizardState: WizardState,
}

export default function Form({ wizardState: { currentIndex, stepTitles } }: Props) {
	const forms: { [key in StepId]: JSX.Element } = {
		'shipping': <Shipping />,
		'payment': <Payment />,
		'confirmation': <Confirmation />,
	};
	const stepTitle = stepTitles[currentIndex];
	return <div>
		<h2>{stepTitle.title}</h2>
		{forms[stepTitle.stepId]}
	</div>
}