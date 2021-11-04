import Step, { StepProps } from './step';
import styles from '../styles/Progress.module.css';

interface Props {
	steps: StepProps[]
	currentStepId: string;
}

function renderStep({ title, stepId }: StepProps, currentStepId: string): JSX.Element {
	return <li key={stepId} className={styles.step}>
		{title}
	</li>
}

function Progress({ steps, currentStepId }: Props) {
	return <ol className={styles.steps}>
		{steps.map((stepProps: StepProps) => renderStep(stepProps, currentStepId))}
	</ol>
}

export default Progress;