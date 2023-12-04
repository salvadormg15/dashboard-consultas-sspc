import { c as create_ssr_component, h as add_attribute, e as escape } from "./ssr.js";
const AccountCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { ariaHidden = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { desc = void 0 } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.ariaHidden === void 0 && $$bindings.ariaHidden && ariaHidden !== void 0)
    $$bindings.ariaHidden(ariaHidden);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("class", className, 0)}${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("aria-hidden", ariaHidden, 0)}>${desc ? `<desc>${escape(desc)}</desc>` : ``}${title ? `<title>${escape(title)}</title>` : ``}<path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
export {
  AccountCircle as A
};
