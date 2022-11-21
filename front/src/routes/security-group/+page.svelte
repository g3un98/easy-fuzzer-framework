<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	async function createSecurityGroup() {
		const response = await fetch('/api/security-group', {
			method: 'POST',
			mode: 'same-origin',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				Description: `EFF-SecurityGroup created ${new Date().toISOString()}`,
				GroupName: 'EFF-SecurityGroup',
				TagSpecifications: [
					{
						ResourceType: 'security-group',
						Tags: [
							{
								Key: 'Service',
								Value: 'EFF'
							}
						]
					}
				]
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
		EFF needs "EFF-SecurityGroup".<br />
		Click "Generate" button!
	</div>
	<button
		class="px-2 py-0.5 rounded-lg bg-amber-400 text-black w-fit"
		on:click={() => createSecurityGroup()}>Generate</button
	>
</div>
