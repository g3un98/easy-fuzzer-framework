<script>
    import { goto } from "$app/navigation";
    import { amis } from "$lib/constants/ami";
    import { instanceTypes } from "$lib/constants/instance";

    let nameVal = "";
    let imageIdVal = "ami-0c8832fce913849e1";
    let instanceTypeVal = "t2.micro";

    async function newInstance() {
        const response = await fetch("/api/instance", {
            method: "POST",
            body: JSON.stringify({
                "MinCount": 1,
                "MaxCount": 1,
                "ImageId": imageIdVal,
                "InstanceType": instanceTypeVal,
                "TagSpecifications": [
                    {
                        "ResourceType": "instance",
                        "Tags": [
                            {
                                "Key": "Name",
                                "Value": nameVal
                            },
                            {
                                "Key": "Service",
                                "Value": "EFF"
                            }
                        ]
                    }
                ]
            }),
            headers: {
                'content-type': 'application/json'
            }
        });

        goto("/");
    }
</script>

<div class="p-8 flex flex-col gap-4">
    <div>
        <input type="text" bind:value={nameVal} />
    </div>
    <div>
        <select bind:value={imageIdVal}>
            {#each amis as ami (ami.amiId)}
                <option value={ami.amiId}>{ami.amiName}</option>
            {/each}
        </select>
    </div>
    <div>
        <select bind:value={instanceTypeVal}>
            {#each instanceTypes as instanceType (instanceType)}
                <option value={instanceType}>{instanceType}</option>
            {/each}
        </select>
    </div>
    <div>
        <button class="px-2 py-0.5 rounded-lg bg-amber-400" on:click={() => newInstance()}>Submit</button>
    </div>
</div>
