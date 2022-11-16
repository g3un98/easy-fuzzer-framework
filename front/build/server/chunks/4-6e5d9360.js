import { e as error } from './index2-93776cd1.js';

async function getInstance(InstanceId) {
  const response = await fetch(`http://127.0.0.1:3000/instance/${InstanceId}`, {
    method: "GET"
  });
  return await response.json();
}
async function load({ params }) {
  const instance = await getInstance(params.slug);
  if (instance)
    return instance.Reservations[0].Instances[0];
  throw error(404, "Not found");
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-513f1919.js')).default;
const file = '_app/immutable/components/pages/instance/_slug_/_page.svelte-c5832c5a.js';
const imports = ["_app/immutable/components/pages/instance/_slug_/_page.svelte-c5832c5a.js","_app/immutable/chunks/index-a88e3314.js"];
const stylesheets = [];

export { component, file, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=4-6e5d9360.js.map
