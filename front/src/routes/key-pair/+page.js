export async function load({ fetch }) {
	const response = await fetch('/api/key-pair');
	const keyPairs = await response.json();

	return keyPairs;
}
