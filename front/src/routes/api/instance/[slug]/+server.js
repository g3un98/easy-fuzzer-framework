export async function GET({ url, params }) {
	const { hostname } = url;
	const instanceId = params.slug;

	const response = await fetch(`http://${hostname}:8080/instance/${instanceId}`, {
		method: 'GET',
		mode: 'same-origin'
	});

	return response;
}

export async function PUT({ url, params }) {
	const { hostname } = url;
	const instanceId = params.slug;

	const response = await fetch(`http://${hostname}:8080/instance/${instanceId}`, {
		method: 'PUT',
		mode: 'same-origin'
	});

	return response;
}

export async function PATCH({ url, params }) {
	const { hostname } = url;
	const instanceId = params.slug;

	const response = await fetch(`http://${hostname}:8080/instance/${instanceId}`, {
		method: 'PATCH',
		mode: 'same-origin'
	});

	return response;
}

export async function DELETE({ url, params }) {
	const { hostname } = url;
	const instanceId = params.slug;

	const response = await fetch(`http://${hostname}:8080/instance/${instanceId}`, {
		method: 'DELETE',
		mode: 'same-origin'
	});

	return response;
}
