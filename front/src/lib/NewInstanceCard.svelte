<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="new-instance grid place-content-center">
	<Fa class="text-gray-300 text-2xl" icon={faPlus} />
</div>

<style>
	.new-instance {
		@apply bg-gray-100 p-4 rounded-lg border-gray-200 border;
		@apply hover:scale-105;
		@apply duration-300;
	}
</style>
