<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	async function createKeyPair() {
		const response = await fetch('/api/key-pair', {
			method: 'POST',
			mode: 'same-origin',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				KeyName: 'EFF-KeyPair'
			})
		});

		const data = await response.json();

		const blob = new Blob([data.KeyMaterial]);
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'EFF-KeyPair.pem';
		a.click();

		if (browser) goto('/');
	}
</script>

<div class="p-4 flex flex-col text-white gap-4">
	<div class="text-4xl text-amber-400 font-bold">Key Pair</div>
	<div class="text-white">
		EFF needs "EFF-KeyPair".<br />
		Click "Generate" button!
	</div>
	<button
		class="px-2 py-0.5 rounded-lg bg-amber-400 text-black w-fit"
		on:click={() => createKeyPair()}>Generate</button
	>
</div>
