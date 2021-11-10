import { checkConfirmEmail, checkEmail, checkName, isLastIndex, orderSteps } from '../profile';

describe('isLastIndex', () => {
	test('returns true if the last index of the steps was passed', () => {
		expect(isLastIndex(2)).toBe(true);
	});
	test('returns false if the last index of the steps was not passed', () => {
		expect(isLastIndex(0)).toBe(false);
	});
});

describe('orderSteps', () => {
	test('takes a function that can accept the step IDs. the IDs are in order.', () => {
		expect(orderSteps((stepId) => stepId)).toStrictEqual(
			['name', 'email', 'confirmation']);
	});
});

describe('checkName', () => {
	test('The length of a name should be greater than 1', () => {
		expect(checkName('a')).toStrictEqual('Minimum 2 characters is required.');
	});

	test('The length of a name should not be empty.', () => {
		expect(checkName('')).toStrictEqual('This field is required.');
	});
	test('returns null if an expected name was passed.', () => {
		expect(checkName('ab')).toStrictEqual(null);
	});
});

describe('checkEmail', () => {
	test('An email address should not be an empty string.', () => {
		expect(checkEmail('')).toStrictEqual('This field is required.');
	});

	test('An email address should be in the format of <local-part>"@"<domain-part>.', () => {
		expect(checkEmail('cat')).toStrictEqual('Please enter a valid email address.');
	});
	test('returns null if An email address in the format of <local-part>"@"<domain-part> was passed.',
		() => {
			expect(checkEmail('foo@bar.com')).toStrictEqual(null);
		});
});

describe('checkConfirmEmail', () => {
	test('The email addresses should match.', () => {
		expect(checkConfirmEmail('aaa@a.com', 'aaa@a.com')).toStrictEqual(null);
	});
	test('tells the email addresses do not match if they are different.', () => {
		expect(checkConfirmEmail('bbb@a.com', 'aaa@a.cm')).toStrictEqual(
			`Your emails don't match.`
		);
	});
})