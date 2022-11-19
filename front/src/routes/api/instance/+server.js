export async function GET({ url }) {
	const { protocol, hostname } = url;

	const response = await fetch(`${protocol}//${hostname}:8080/instance`, {
		method: 'GET',
		mode: 'no-cors'
	});

	return response;
}
