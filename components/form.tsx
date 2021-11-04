import { WizardState } from "../hooks/useWizard";
import Confirmation from "./confirmation";
import Payment from "./payment";
import Shipping from "./shipping";

interface Props {
	wizardState: WizardState,
}

export default function Form({wizardState: {stepIndex, stepProps} }: Props) {
	stepProps[stepIndex].stepId;
	const forms = {
		
	}
	const a= <Shipping/>
	const b = <Payment/>
	const c = <Confirmation/>
	return <div>
		<h2>{stepProps[stepIndex].title}</h2>
	</div>
}