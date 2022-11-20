<script>
	import { page } from '$app/stores';

	const { hostname } = $page.url;
</script>

<iframe title="Prometheus" src="http://{hostname}:3000" />

<style>
	iframe {
		@apply block w-full min-h-screen h-full border-none overflow-x-hidden overflow-y-auto;
	}
</style>
