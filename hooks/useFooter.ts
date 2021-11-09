import { NextRouter, useRouter } from 'next/dist/client/router';
import { postProfile } from '../libs/api';
import { isLastIndex, submitProfile } from '../libs/profile';

export interface FooterProps {
	firstName: string,
	lastName: string,
	email: string,
	currentIndex: number,
	setCurrentIndex: (index: number) => void,
	validForm: boolean,
}

export function useFooter(props: FooterProps): [boolean, boolean, () => void, () => void] {
	const router = useRouter();
	return [
		props.currentIndex === 0,
		isLastIndex(props.currentIndex),
		createOnBack(props.currentIndex, props.setCurrentIndex),
		createOnProceed(props, router),
	];
}

function createOnBack(currentIndex: number, setCurrentIndex: (index: number) => void): () => void {
	return () => {
		if (currentIndex > 0)
			setCurrentIndex(currentIndex - 1);
	}
}

function createOnProceed(
	{ firstName, lastName, email, validForm, currentIndex, setCurrentIndex }: FooterProps, router: NextRouter) {
	return () => {
		if (!validForm)
			return;
		if (isLastIndex(currentIndex)) {
			submitProfile(
				firstName, lastName, email, postProfile, () => { router.reload(); }
			);
		} else {
			setCurrentIndex(currentIndex + 1);
		}
	}
}