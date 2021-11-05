import { useRouter } from 'next/dist/client/router';
import { useReducer } from 'react';
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
		() => {
			if (props.currentIndex > 0)
				props.setCurrentIndex(props.currentIndex - 1);
		},
		() => {
			if (!props.validForm)
				return;
			if (isLastIndex(props.currentIndex)) {
				const { firstName, lastName, email } = props;
				submitProfile(firstName, lastName, email, postProfile,
					() => { 
						router.reload(); 
					}
				);
				postProfile;
			} else {
				props.setCurrentIndex(props.currentIndex + 1);
			}

		},
	];
}