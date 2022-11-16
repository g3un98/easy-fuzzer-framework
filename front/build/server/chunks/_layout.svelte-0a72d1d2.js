import { c as create_ssr_component } from './index-3a2c201a.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"flex px-4 py-2 gap-8"}"><button>Home</button>
    <button>Grafana</button>
    <button>Prometheus</button></nav>
<main class="${"h-full"}">${slots.default ? slots.default({}) : ``}</main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-0a72d1d2.js.map
