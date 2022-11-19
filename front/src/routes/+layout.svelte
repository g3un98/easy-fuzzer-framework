<script>
	import '../app.postcss';
	import { goto } from '$app/navigation';
</script>

<nav class="flex px-4 py-2 gap-8">
	<button on:click={() => goto('/')}>Home</button>
	<button on:click={() => goto('/grafana')}>Grafana</button>
	<button on:click={() => goto('/prometheus')}>Prometheus</button>
</nav>
<main class="h-full">
	<slot />
</main>
