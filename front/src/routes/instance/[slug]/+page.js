export async function load({ fetch, params }) {
	const instanceId = params.slug;
	const response = await fetch(`/api/instance/${instanceId}`);
	const instance = await response.json();

	return { Instance: instance.Reservations[0].Instances[0] };
}
