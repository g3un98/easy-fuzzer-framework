import { error } from "@sveltejs/kit";

async function getInstances() {
  const response = await fetch("http://127.0.0.1:3000/instance", {
    method: "GET",
  });
  
  return await response.json();
}

/** @type {import("./$types").PageServerLoad} */
export async function load({ params }) {
  const instances = await getInstances();
  
  if (instances)
    return instances;
  
  throw error(404, "Not found");
}