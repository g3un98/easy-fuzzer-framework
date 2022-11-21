import { readData } from '$lib/utils';

export async function GET({ url }) {
	const { hostname } = url;

	const response = await fetch(`http://${hostname}:8080/key-pair`, {
		method: 'GET',
		mode: 'same-origin'
	});

	return response;
}

export async function POST({ request, url }) {
	const data = await readData(request.body.getReader());

	const { hostname } = url;

	const response = await fetch(`http://${hostname}:8080/key-pair`, {
		method: 'POST',
		mode: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: String.fromCharCode(...data)
	});

	return response;
}
