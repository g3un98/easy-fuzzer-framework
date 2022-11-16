import { e as error } from './index2-93776cd1.js';

async function getInstances() {
  const response = await fetch("http://127.0.0.1:3000/instance", {
    method: "GET"
  });
  return await response.json();
}
async function load({ params }) {
  const instances = await getInstances();
  if (instances)
    return instances;
  throw error(404, "Not found");
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_page.svelte-7fb5517d.js')).default;
const file = '_app/immutable/components/pages/_page.svelte-d0828777.js';
const imports = ["_app/immutable/components/pages/_page.svelte-d0828777.js","_app/immutable/chunks/index-a88e3314.js","_app/immutable/chunks/navigation-975cb25a.js","_app/immutable/chunks/singletons-3ea218b8.js"];
const stylesheets = ["_app/immutable/assets/_page-4fe6c866.css"];

export { component, file, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=2-eaea61e3.js.map
