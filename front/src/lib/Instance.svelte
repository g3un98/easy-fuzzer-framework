<script lang="ts">
	export let name;
	export let os;
	export let fuzzer;
</script>

<div class="instance">
	<ul>
		<li>Name: {name}</li>
		<li>OS: {os}</li>
		<li>Fuzzer: {fuzzer}</li>
	</ul>
</div>

<style>
	.instance {
		@apply bg-emerald-100 p-4 rounded-lg;
		@apply hover:scale-105;
		@apply duration-150;
	}
</style>
