<script lang="ts">
	import Dashboard from '$lib/Dashboard.svelte';
	import NewInstanceCard from '$lib/NewInstanceCard.svelte';
	import InstanceCard from '$lib/InstanceCard.svelte';
	
	/** @type {import("./$types").PageData} */
	export let data;
	
	data.Reservations.forEach((i) => {
	  console.log(i);
	});

	const instanceData = [
		{
			idx: 0,
			name: 'Instance 1',
			os: 'Ubuntu 22.04 LTS',
			fuzzer: 'AFL++'
		},
		{
			idx: 1,
			name: 'Instance 2',
			os: 'Windows 10',
			fuzzer: 'WinAFL'
		},
		{
			idx: 2,
			name: 'Instance 3',
			os: 'Windows 10',
			fuzzer: 'Peach'
		},
		{
			idx: 3,
			name: 'Instance 4',
			os: 'Ubuntu 22.04 LTS',
			fuzzer: 'AFL++'
		},
		{
			idx: 4,
			name: 'Instance 5',
			os: 'Windows 10',
			fuzzer: 'Peach'
		},
		{
			idx: 5,
			name: 'Instance 6',
			os: 'Ubuntu 22.04 LTS',
			fuzzer: 'AFL++'
		}
	];
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
	<Dashboard />
	<NewInstanceCard />
	{#each instanceData as instance}
		<InstanceCard {...instance} />
	{/each}
</div>

<style>
</style>
