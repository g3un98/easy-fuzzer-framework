export async function GET({ url, params }) {
	const { protocol, hostname } = url;
	const instanceId = params.slug;

	console.log(`${protocol}//${hostname}:8080/instance/${instanceId}`);
	const response = await fetch(`${protocol}//${hostname}:8080/instance/${instanceId}`, {
		method: 'GET',
		mode: 'no-cors'
	});

	return response;
}
