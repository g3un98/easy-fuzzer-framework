<script>
	import { page } from '$app/stores';

	const { hostname } = $page.url;
</script>

<iframe title="Prometheus" src="http://{hostname}:9090" />

<style>
	iframe {
		@apply block w-full h-full border-none overflow-x-hidden overflow-y-auto;
	}
</style>
