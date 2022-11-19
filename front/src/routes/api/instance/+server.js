export async function GET({ url }) {
	const { hostname } = url;

	const response = await fetch(`http://${hostname}:8080/instance`, {
		method: 'GET',
		mode: 'no-cors'
	});

	return response;
}
