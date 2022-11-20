<script>
    import { amis } from "$lib/constants/ami";

    export let instances;

    const ubuntuAmis = [];
    const windowsAmis = [];

    amis.forEach((a) => {
        switch (a.os) {
        case "ubuntu":
                ubuntuAmis.push(a.amiId);
                break;
        case "windows":
                windowsAmis.push(a.amiId);
                break;
        default:
        }
    });

    let ubuntuCount = 0;
    let windowsCount = 0;

    instances.forEach((instance) => {
        if (ubuntuAmis.includes(instance.ImageId)) {
            ubuntuCount++;
        } else if (windowsAmis.includes(instance.ImageId)) {
            windowsCount++;
        }
        
    });
</script>

<div class="dashboard flex flex-col gap-4">
    <div class="text-xl font-bold">Total instance: {instances.length}</div>
    <div>
        <div class="text-lg font-semibol">OS</div>
        <div class="pt-1 pl-2">
            <div>Ubuntu: {ubuntuCount}</div>
            <div>Windows: {windowsCount}</div>
        </div>
    </div>

</div>

<style>
	.dashboard {
		@apply bg-amber-200 p-4 rounded-md drop-shadow-lg border-amber-300 border;
		@apply col-span-1 sm:col-span-2 lg:col-span-3;
		@apply mb-4;
	}
</style>
