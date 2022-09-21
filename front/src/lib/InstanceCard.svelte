<script lang="ts">
	export let idx;
	export let name;
	export let os;
	export let fuzzer;
</script>

<a href="/instance/{idx}">
	<div class="instance">
		<ul>
			<li>Name: {name}</li>
			<li>OS: {os}</li>
			<li>Fuzzer: {fuzzer}</li>
		</ul>
	</div>
</a>

<style>
	.instance {
		@apply bg-emerald-100 p-4 rounded-md border-emerald-200 border;
		@apply hover:scale-105;
		@apply duration-300;
	}
</style>
