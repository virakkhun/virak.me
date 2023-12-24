import type { User } from '../../../shared/models/user';

export async function fetchUserToken(code: string) {
	const res = await fetch(`/api/user-token-api?code=${code}`);

	if (!res.ok) throw new Error(res.statusText);

	return Promise.resolve();
}

export async function getUserInfo() {
	const res = await fetch('/api/user-info-api');

	if (!res.ok) throw new Error(res.statusText);

	const data = await res.json();

	return Promise.resolve(data) as Promise<User>;
}
