import { FooterProps, useFooter } from '../hooks/useFooter';
import styles from '../styles/Footer.module.css';

function Footer(props: FooterProps) {
	const [isFirst, isLast, onBack, onNext] = useFooter(props);
	const backStyle = isFirst ? '' : styles.invalid;
	const nextStyle = isLast ? styles.signup : styles.next;
	const invalidStyle = props.validForm ? '' : styles.invalid;
	return <div className={styles.container}>
		<div className={`${styles.back} ${backStyle}`} onClick={onBack}>back</div>
		<div className={`${nextStyle} ${invalidStyle}`} onClick={onNext} />
	</div>
}

export default Footer;