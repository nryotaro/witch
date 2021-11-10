import { FooterProps, useFooter } from '../hooks/useFooter';
import styles from './Footer.module.css';

function Footer(props: FooterProps) {
	const [isFirst, isLast, onBack, onNext] = useFooter(props);
	const backStyle = isFirst ? styles.disable : '';
	const nextStyle = isLast ? styles.submit : styles.next;
	const invalidStyle = props.validForm ? '' : styles.invalid;
	return <div className={styles.container}>
		<div className={`${styles.back} ${backStyle} ${styles.button}`}
			onClick={onBack}>back</div>
		<div className={`${nextStyle} ${invalidStyle} ${styles.proceed} ${styles.button}`}
			onClick={onNext} />
	</div>
}

export default Footer;