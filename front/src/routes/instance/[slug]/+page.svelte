<script>
	import { page } from '$app/stores';

	export let data;

	const { Architecture, ImageId, InstanceId, InstanceType, Tags, State } = data;

	const Name = Tags.filter((t) => t['Key'] === 'Name')[0]['Value'] || null;

	async function startInstance() {
		await fetch(`/api/instance/${$page.params.slug}`, {
			method: 'PUT'
		});

		location.reload();
	}

	async function stopInstance() {
		await fetch(`/api/instance/${$page.params.slug}`, {
			method: 'PATCH'
		});

		location.reload();
	}

	async function deleteInstance() {
		await fetch(`/api/instance/${$page.params.slug}`, {
			method: 'DELETE'
		});

		location.reload();
	}
</script>

<div class="p-4 flex flex-col text-white gap-4">
	{#if Name}
		<div class="text-4xl text-amber-400 font-bold">{Name}</div>
	{/if}
	<div>ImageId: {ImageId}</div>
	<div>InstanceType: {InstanceType}</div>
	<div>State: {State.Name} ({State.Code})</div>
	<div class="flex gap-4">
		{#if State.Code == 80}
			<button
				on:click={() => startInstance()}
				class="px-2 py-0.5 rounded-lg bg-amber-400 text-black">Start</button
			>
		{/if}
		{#if State.Code == 16}
			<button on:click={() => stopInstance()} class="px-2 py-0.5 rounded-lg bg-amber-400 text-black"
				>Stop</button
			>
		{/if}
		{#if State.Code == 80}
			<button
				on:click={() => deleteInstance()}
				class="px-2 py-0.5 rounded-lg bg-amber-400 text-black">Delete</button
			>
		{/if}
	</div>
</div>
