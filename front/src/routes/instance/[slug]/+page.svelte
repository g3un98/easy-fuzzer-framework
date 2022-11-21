<script>
	import { page } from '$app/stores';
	import { getAmi } from '$lib/constants/ami';

	export let data;

	const { Instance } = data;
	const {
		Architecture,
		ImageId,
		InstanceId,
		InstanceType,
		Tags,
		State,
		UserData,
		PublicIpAddress
	} = Instance;

	const Name = Tags.filter((t) => t['Key'] === 'Name')[0]['Value'] || null;
	const ami = getAmi(ImageId);

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

	<div>
		{#if ami}
			<div>AMI: {ami.amiName}</div>
		{:else}
			<div>ImageId: {ImageId}</div>
		{/if}
		<div>Instance Type: {InstanceType}</div>
		<div>Public IP: {PublicIpAddress}</div>
		<div>State: {State.Name} ({State.Code})</div>
		{#if UserData}
			<div class="p-4 bg-white rounded-lg">
				{UserData}
			</div>
		{/if}
	</div>

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
