<script lang="ts">
	import Dashboard from '$lib/components/Dashboard.svelte';
	import NewInstanceCard from '$lib/components/NewInstanceCard.svelte';
	import InstanceCard from '$lib/components/InstanceCard.svelte';

	/** @type {import("./$types").PageData} */
	export let data;

	const instances = [];

	data.Reservations.forEach((r) => {
		r.Instances.forEach((i) => {
			let res = i.Tags.filter((t) => {
				return t['Key'] == 'Service' && t['Value'] == 'EFF';
			});
			if (res.length === 1) instances.push(...r.Instances);
		});
	});
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
	<Dashboard />
	<NewInstanceCard />
	{#each instances as instance (instance.InstanceId)}
		<InstanceCard {instance} />
	{/each}
</div>

<style>
</style>
