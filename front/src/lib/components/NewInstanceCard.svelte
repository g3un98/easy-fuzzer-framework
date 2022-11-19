<script>
	import { goto } from '$app/navigation';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';
</script>
 
<div class="new-instance grid place-content-center" on:click={() => goto("/instance")}>
	<Fa class="text-gray-300 text-2xl" icon={faPlus} />
</div>

<style>
	.new-instance {
		@apply bg-gray-100 p-4 rounded-md border-gray-200 border;
		@apply hover:scale-105;
		@apply duration-300;
	}
</style>
