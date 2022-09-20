<script lang="ts">
	import Dashboard from '$lib/Dashboard.svelte';
	import NewInstance from '$lib/NewInstance.svelte';
	import Instance from '$lib/Instance.svelte';

	const instanceData = [
		{
			name: 'Instance 1',
			os: 'Ubuntu 22.04 LTS',
			fuzzer: 'AFL++'
		},
		{
			name: 'Instance 2',
			os: 'Windows 10',
			fuzzer: 'WinAFL'
		},
		{
			name: 'Instance 3',
			os: 'Windows 10',
			fuzzer: 'Peach'
		},
		{
			name: 'Instance 4',
			os: 'Ubuntu 22.04 LTS',
			fuzzer: 'AFL++'
		},
		{
			name: 'Instance 5',
			os: 'Windows 10',
			fuzzer: 'Peach'
		},
		{
			name: 'Instance 6',
			os: 'Ubuntu 22.04 LTS',
			fuzzer: 'AFL++'
		}
	];
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
	<Dashboard />
	<NewInstance />
	{#each instanceData as instance}
		<Instance {...instance} />
	{/each}
</div>

<style>
</style>
