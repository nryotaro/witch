
export interface UserProfile {

}

export async function postProfile(
	userProfile: UserProfile, endpoint: string = '/api/profiles'): Promise<boolean> {
	const response = await fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userProfile),
	});
	return response.status == 201;
}