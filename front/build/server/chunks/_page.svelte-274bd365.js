import { c as create_ssr_component, b as subscribe, e as escape } from './index-3a2c201a.js';
import { p as page } from './stores-12a79daf.js';

const css = {
  code: "iframe.svelte-ndits4{display:block;height:100%;width:100%;overflow-y:auto;overflow-x:hidden;border-style:none\n}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const { protocol, hostname } = $page.url;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<iframe src="${escape(protocol, true) + "//" + escape(hostname, true) + ":3000}"}" class="${"svelte-ndits4"}"></iframe>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-274bd365.js.map
