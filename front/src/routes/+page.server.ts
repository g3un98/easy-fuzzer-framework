import { get } from 'svelte/store';
import { page } from '$app/stores';
import { error } from '@sveltejs/kit';

async function getInstances() {
	const { url } = get(page);
	const { protocol, hostname } = url;
	const response = await fetch(`${protocol}//${hostname}:8080/instance`, {
		method: 'GET'
	});

	return await response.json();
}

/** @type {import("./$types").PageServerLoad} */
export async function load({ params }) {
	const instances = await getInstances();

	if (instances) return instances;

	throw error(404, 'Not found');
}
