<script>
	export let data;

	const { Architecture, ImageId, InstanceId, InstanceType, Tags, State } = data;

	const Name = Tags.filter((t) => t['Key'] === 'Name')[0]['Value'] || null;
</script>

<div>
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
