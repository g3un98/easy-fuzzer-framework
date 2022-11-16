import { error } from "@sveltejs/kit";

async function getInstance(InstanceId) {
  const response = await fetch(`http://127.0.0.1:3000/instance/${InstanceId}`, {
      method: "GET",
  });
  
  return await response.json();
}

/** @type {import("./$types").PageServerLoad} */
export async function load({ params }) {
  const instance = await getInstance(params.slug);
  
  if (instance)
    return instance.Reservations[0].Instances[0];
  
  throw error(404, "Not found");
}
