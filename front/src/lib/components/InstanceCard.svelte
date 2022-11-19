<script>
	import { goto } from '$app/navigation';

	export let instance;

	const { Architecture, ImageId, InstanceId, InstanceType, Tags, State } = instance;

	const Name = Tags.filter((t) => t['Key'] === 'Name')[0]['Value'] || null;
</script>

<button on:click={() => goto(`/instance/${InstanceId}`)}>
	<div class="instance">
		<ul>
			{#if Name}
				<li>Name: {Name}</li>
			{/if}
			<li>Architecture: {Architecture}</li>
			<li>ImageId: {ImageId}</li>
			<li>InstanceId: {InstanceId}</li>
			<li>InstanceType: {InstanceType}</li>
			<li>State: {State.Name} ({State.Code})</li>
		</ul>
	</div>
</button>

<style>
	.instance {
		@apply bg-emerald-100 p-4 rounded-md border-emerald-200 border;
		@apply hover:scale-105;
		@apply duration-300;
	}
</style>
