<script>
	import '../app.postcss';
	import { goto } from '$app/navigation';
</script>

<nav class="flex px-8 py-4 gap-8 bg-slate-900 text-amber-500 font-bold text-lg">
	<button on:click={() => goto('/')}>Home</button>
	<button on:click={() => goto('/grafana')}>Grafana</button>
	<button on:click={() => goto('/prometheus')}>Prometheus</button>
</nav>
<main class="min-h-full bg-slate-800">
	<slot />
</main>
