import { postProfile } from '../libs/api';
import { isLastIndex } from '../libs/profile';

export interface FooterProps {
	firstName: string,
	lastName: string,
	email: string,
	currentIndex: number,
	setCurrentIndex: (index: number) => void,
	validForm: boolean,
}

export function useFooter(props: FooterProps): [boolean, boolean, () => void, () => void] {
	console.log(props);
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