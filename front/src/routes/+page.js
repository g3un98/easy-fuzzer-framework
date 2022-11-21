export async function load({ fetch }) {
	let response = await fetch('/api/key-pair');
	let keyPairs = await response.json();
	keyPairs = keyPairs.KeyPairs;

	let response = await fetch('/api/security-group');
	let securityGroups = await response.json();
	securityGroups = securityGroups.SecurityGroups;

	response = await fetch('/api/instance');
	let instances = await response.json();
	instances = instances.Reservations;
	instances = instances.map((i) => i.Instances);
	instances = instances.reduce((acc, cur) => acc.concat(cur));

	return { KeyPairs: keyPairs, SecurityGroups: securityGroups, Instances: instances };
}
