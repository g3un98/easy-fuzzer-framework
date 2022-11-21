<script>
	export let data;

	const { KeyPairs } = data;

	let nameVal = '';

	async function createKeyPair() {
		const response = await fetch('/api/key-pair', {
			method: 'POST',
			mode: 'same-origin',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				KeyName: nameVal
			})
		});

		const data = await response.json();

		console.log(data.KeyMaterial);

		const blob = new Blob([data.KeyMaterial]);
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `${nameVal}.pem`;
		a.click();
	}
</script>

<div class="p-4">
	<div>
		<div>Name: <input class="px-2 py-0.5 rounded-lg" type="text" bind:value={nameVal} /></div>
		<button on:click={() => createKeyPair()}>Submit</button>
	</div>
	<div class="flex flex-col gap-4">
		{#each KeyPairs as keyPair}
			<div>{keyPair.KeyName}</div>
		{/each}
	</div>
</div>
