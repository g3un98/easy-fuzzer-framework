export async function load({ fetch }) {
	const response = await fetch('/api/instance');
	const instances = await response.json();

	return instances;
}
