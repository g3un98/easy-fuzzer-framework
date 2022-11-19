import { get } from 'svelte/store';
import { page } from '$app/stores';
import { error } from '@sveltejs/kit';

async function getInstance(InstanceId) {
	const { url } = get(page);
	const { protocol, hostname } = url;
	const response = await fetch(`${protocol}//${hostname}:8080/instance/${InstanceId}`, {
		method: 'GET'
	});

	return await response.json();
}

/** @type {import("./$types").PageServerLoad} */
export async function load({ params }) {
	const instance = await getInstance(params.slug);

	if (instance) return instance.Reservations[0].Instances[0];

	throw error(404, 'Not found');
}
