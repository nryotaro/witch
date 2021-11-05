import styles from './Progress.module.css';
import { StepId } from '../libs/profile';

interface Props {
	stepTitles: { title: string, stepId: StepId }[],
	currentIndex: number;
}

function Progress({ stepTitles, currentIndex }: Props) {
	return <ol className={styles.steps}>
		{stepTitles.map(
			({title, stepId}, index: number) => renderStep(title, stepId, index <= currentIndex))}
	</ol>
}

function renderStep(title: string, stepId: StepId, enable: boolean): JSX.Element {
	const textStyle = enable ? styles.progress : styles.further;
	return <li key={stepId} className={`${styles.step} ${textStyle}`}>
		{title}
	</li>
}

export default Progress;
