export async function GET({ url, params }) {
	const { hostname } = url;
	const instanceId = params.slug;

	const response = await fetch(`http://${hostname}:8080/instance/${instanceId}`, {
		method: 'GET',
		mode: 'no-cors'
	});

	return response;
}
