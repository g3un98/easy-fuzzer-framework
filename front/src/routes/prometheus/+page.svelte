<script>
	import { page } from '$app/stores';

	const { protocol, hostname } = $page.url;
</script>

<iframe src="{protocol}//{hostname}:9090" />

<style>
	iframe {
		@apply block w-full h-full border-none overflow-x-hidden overflow-y-auto;
	}
</style>
