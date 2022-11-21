<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Dashboard from '$lib/components/Dashboard.svelte';
	import NewInstanceCard from '$lib/components/NewInstanceCard.svelte';
	import InstanceCard from '$lib/components/InstanceCard.svelte';

	export let data;

	const { KeyPairs, Instances } = data;

	let isKeyPairExist = false;
	KeyPairs.forEach((k) => {
		if (k.KeyName == 'EFF-KeyPair') isKeyPairExist = true;
	});
	if (!isKeyPairExist && browser) goto('/key-pair');
</script>

<div class="p-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
	<Dashboard {Instances} />
	<NewInstanceCard />
	{#each Instances as instance (instance.InstanceId)}
		<InstanceCard {instance} />
	{/each}
</div>
