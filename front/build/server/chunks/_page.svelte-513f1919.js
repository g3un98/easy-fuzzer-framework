import { c as create_ssr_component, e as escape } from './index-3a2c201a.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { Architecture, ImageId, InstanceId, InstanceType, Tags, State } = data;
  const Name = Tags.filter((t) => t["Key"] === "Name")[0]["Value"] || null;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div><ul>${Name ? `<li>Name: ${escape(Name)}</li>` : ``}
        <li>Architecture: ${escape(Architecture)}</li>
        <li>ImageId: ${escape(ImageId)}</li>
        <li>InstanceId: ${escape(InstanceId)}</li>
        <li>InstanceType: ${escape(InstanceType)}</li>
        <li>State: ${escape(State.Name)} (${escape(State.Code)})</li></ul></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-513f1919.js.map
