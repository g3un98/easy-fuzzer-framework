import { c as create_ssr_component, v as validate_component, d as each, e as escape, f as add_attribute } from './index-3a2c201a.js';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const css$3 = {
  code: ".dashboard.svelte-z7gepk{border-radius:0.375rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(110 231 183 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(167 243 208 / var(--tw-bg-opacity));padding:1rem;--tw-drop-shadow:drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);grid-column:span 1 / span 1\n}@media(min-width: 640px){.dashboard.svelte-z7gepk{grid-column:span 2 / span 2\n    }}@media(min-width: 1024px){.dashboard.svelte-z7gepk{grid-column:span 3 / span 3\n    }}.dashboard.svelte-z7gepk{margin-bottom:1rem\n}",
  map: null
};
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"dashboard svelte-z7gepk"}"><ul><li>Total time: 00:00:00</li>
		<li>Total instnace: 00</li>
		<li>Total count: 00000</li>
		<li>Total crash: 000</li></ul>
</div>`;
});
const parseNumber = parseFloat;
function joinCss(obj, separator = ";") {
  let texts;
  if (Array.isArray(obj)) {
    texts = obj.filter((text) => text);
  } else {
    texts = [];
    for (const prop in obj) {
      if (obj[prop]) {
        texts.push(`${prop}:${obj[prop]}`);
      }
    }
  }
  return texts.join(separator);
}
function getStyles(style, size, pull, fw) {
  let float;
  let width;
  const height = "1em";
  let lineHeight;
  let fontSize;
  let textAlign;
  let verticalAlign = "-.125em";
  const overflow = "visible";
  if (fw) {
    textAlign = "center";
    width = "1.25em";
  }
  if (pull) {
    float = pull;
  }
  if (size) {
    if (size == "lg") {
      fontSize = "1.33333em";
      lineHeight = ".75em";
      verticalAlign = "-.225em";
    } else if (size == "xs") {
      fontSize = ".75em";
    } else if (size == "sm") {
      fontSize = ".875em";
    } else {
      fontSize = size.replace("x", "em");
    }
  }
  return joinCss([
    joinCss({
      float,
      width,
      height,
      "line-height": lineHeight,
      "font-size": fontSize,
      "text-align": textAlign,
      "vertical-align": verticalAlign,
      "transform-origin": "center",
      overflow
    }),
    style
  ]);
}
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  return joinCss(
    [
      `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
      `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
      rotate && `rotate(${rotate}${rotateUnit})`
    ],
    " "
  );
}
const css$2 = {
  code: ".spin.svelte-1w3t65e{-webkit-animation:svelte-1w3t65e-spin 2s 0s infinite linear;animation:svelte-1w3t65e-spin 2s 0s infinite linear}.pulse.svelte-1w3t65e{-webkit-animation:svelte-1w3t65e-spin 1s infinite steps(8);animation:svelte-1w3t65e-spin 1s infinite steps(8)}@-webkit-keyframes svelte-1w3t65e-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes svelte-1w3t65e-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}",
  map: null
};
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { id = "" } = $$props;
  let { style = "" } = $$props;
  let { icon } = $$props;
  let { size = "" } = $$props;
  let { color = "" } = $$props;
  let { fw = false } = $$props;
  let { pull = "" } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = "" } = $$props;
  let { flip = false } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let i;
  let s;
  let transform;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css$2);
  i = icon && icon.icon || [0, 0, "", [], ""];
  s = getStyles(style, size, pull, fw);
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? `<svg${add_attribute("id", id || void 0, 0)} class="${[
    "svelte-fa " + escape(clazz, true) + " svelte-1w3t65e",
    (pulse ? "pulse" : "") + " " + (spin ? "spin" : "")
  ].join(" ").trim()}"${add_attribute("style", s, 0)} viewBox="${"0 0 " + escape(i[0], true) + " " + escape(i[1], true)}" aria-hidden="${"true"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}"><g transform="${"translate(" + escape(i[0] / 2, true) + " " + escape(i[1] / 2, true) + ")"}" transform-origin="${escape(i[0] / 4, true) + " 0"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>` : `
          <path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>
          <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>`}</g></g></svg>` : ``}`;
});
const Fa$1 = Fa;
const css$1 = {
  code: ".new-instance.svelte-vkkwm1{border-radius:0.375rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));padding:1rem\n}.new-instance.svelte-vkkwm1:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}.new-instance.svelte-vkkwm1{transition-duration:300ms\n}",
  map: null
};
const NewInstanceCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"new-instance grid place-content-center svelte-vkkwm1"}">${validate_component(Fa$1, "Fa").$$render(
    $$result,
    {
      class: "text-gray-300 text-2xl",
      icon: faPlus
    },
    {},
    {}
  )}
</div>`;
});
const css = {
  code: ".instance.svelte-jb07xa{border-radius:0.375rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(167 243 208 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(209 250 229 / var(--tw-bg-opacity));padding:1rem\n}.instance.svelte-jb07xa:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}.instance.svelte-jb07xa{transition-duration:300ms\n}",
  map: null
};
const InstanceCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { instance } = $$props;
  const { Architecture, ImageId, InstanceId, InstanceType, Tags, State } = instance;
  const Name = Tags.filter((t) => t["Key"] === "Name")[0]["Value"] || null;
  if ($$props.instance === void 0 && $$bindings.instance && instance !== void 0)
    $$bindings.instance(instance);
  $$result.css.add(css);
  return `<button><div class="${"instance svelte-jb07xa"}"><ul>${Name ? `<li>Name: ${escape(Name)}</li>` : ``}
            <li>Architecture: ${escape(Architecture)}</li>
			<li>ImageId: ${escape(ImageId)}</li>
			<li>InstanceId: ${escape(InstanceId)}</li>
			<li>InstanceType: ${escape(InstanceType)}</li>
            <li>State: ${escape(State.Name)} (${escape(State.Code)})</li></ul></div>
</button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const instances = [];
  data.Reservations.forEach((r) => {
    r.Instances.forEach((i) => {
      let res = i.Tags.filter((t) => {
        return t["Key"] == "Service" && t["Value"] == "EFF";
      });
      if (res.length === 1)
        instances.push(...r.Instances);
    });
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"}">${validate_component(Dashboard, "Dashboard").$$render($$result, {}, {}, {})}
	${validate_component(NewInstanceCard, "NewInstanceCard").$$render($$result, {}, {}, {})}
    ${each(instances, (instance) => {
    return `${validate_component(InstanceCard, "InstanceCard").$$render($$result, { instance }, {}, {})}`;
  })}
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7fb5517d.js.map
