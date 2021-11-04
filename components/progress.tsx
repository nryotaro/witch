import Step, { StepProps } from './step';
import styles from '../styles/Progress.module.css';

interface Props {
	steps: StepProps[]
	stepIndex: number;
}

function renderStep({ title, stepId }: StepProps, further: boolean): JSX.Element {
	const textStyle = further ? styles.further : styles.progress;
	return <li key={stepId} className={`${styles.step} ${textStyle}`}>
		{title}
	</li>
}

function Progress({ steps, stepIndex }: Props) {
	return <ol className={styles.steps}>
		{steps.map((stepProps: StepProps, index: number) => renderStep(stepProps, stepIndex < index))}
	</ol>
}

export default Progress;