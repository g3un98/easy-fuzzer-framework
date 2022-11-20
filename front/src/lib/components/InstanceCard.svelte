<script>
	import { goto } from '$app/navigation';
    import { getAmi } from "$lib/constants/ami";

	export let instance;

	const { Architecture, ImageId, InstanceId, InstanceType, Tags, State } = instance;

	const Name = Tags.filter((t) => t['Key'] === 'Name')[0]['Value'] || null;

    const ami = getAmi(ImageId);
</script>

<div class="instance" on:click={() => goto(`/instance/${InstanceId}`)}>
        {#if Name}
            <div class="text-lg font-semibold">{Name}</div>
        {/if}
        {#if ami}
            <div>AMI: {ami.amiName}</div>
        {/if}
        <div>InstanceType: {InstanceType}</div>
        <div>State: {State.Name} ({State.Code})</div>
</div>

<style>
	.instance {
		@apply bg-amber-100 p-4 rounded-md border-amber-200 border;
		@apply hover:scale-105;
		@apply duration-300;
	}
</style>
