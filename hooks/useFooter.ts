import { postProfile } from '../libs/api';
import { isLastIndex } from '../libs/checkout';

export interface FooterProps {
	userName: string,
	password: string,
	email: string,
	currentIndex: number,
	setCurrentIndex: (index: number) => void,
	validForm: boolean,
}

export function useFooter(props: FooterProps): [boolean, boolean, () => void, () => void] {
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
			if(isLastIndex(props.currentIndex)) {
				postProfile;
			} else {
				props.setCurrentIndex(props.currentIndex + 1);
			}
			
		},
	];
}