<script>
    import { goto } from "$app/navigation";
    import { amis } from "$lib/constants/ami";
    import { instanceTypes } from "$lib/constants/instance";

    let nameVal = "";
    let imageIdVal = "ami-0c8832fce913849e1";
    let instanceTypeVal = "t2.micro";
    let userDataVal = "";

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
                ],
                "UserData": userDataVal
            }),
            headers: {
                'content-type': 'application/json'
            }
        });

        goto("/");
    }
</script>

<div class="p-8 flex flex-col gap-4">
    <div class="flex gap-4">
        <div class="text-white">Name:</div><input class="px-2 py-0.5 rounded-lg" type="text" bind:value={nameVal} />
    </div>
    <div class="flex gap-4">
        <div class="text-white">AMI:</div>
        <select bind:value={imageIdVal}>
            {#each amis as ami (ami.amiId)}
                <option value={ami.amiId}>{ami.amiName}</option>
            {/each}
        </select>
    </div>
    <div class="flex gap-4">
        <div class="text-white">Instance Type:</div>
        <select bind:value={instanceTypeVal}>
            {#each instanceTypes as instanceType (instanceType)}
                <option value={instanceType}>{instanceType}</option>
            {/each}
        </select>
    </div>
    <div class="flex flex-col gap-4">
        <div class="text-white">User Data</div>
        <textarea bind:value={userDataVal} class="p-4 rounded-lg" type="text" rows="8" />
    </div>
    <div class="flex gap-4">
        <button class="px-2 py-0.5 rounded-lg bg-amber-400" on:click={() => newInstance()}>Submit</button>
    </div>
</div>
