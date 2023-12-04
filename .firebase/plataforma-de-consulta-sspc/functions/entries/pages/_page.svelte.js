import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
/* empty css                */import { A as AccountCircle } from "../../chunks/AccountCircle.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".login-content.s-y_bCXRrkrYfP{color:white;background-color:rgb(39, 62, 112);border-radius:10px;max-width:400px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="login-content mx-auto my-10 p-6 flex flex-col items-center space-y-4 s-y_bCXRrkrYfP">${validate_component(AccountCircle, "AccountCircle").$$render($$result, { width: "100px", height: "100px" }, {}, {})} <div class="form-control w-full max-w-xs"><label class="label"><span class="label-text text-white" data-svelte-h="svelte-xgnt7d">Correo Electronico</span></label> <input type="text" placeholder="Escribe tu correo" class="input input-bordered w-full max-w-xs"></div> <div class="form-control w-full max-w-xs"><label class="label"><span class="label-text text-white" data-svelte-h="svelte-1uja4dz">Contraseña</span></label> <input type="password" placeholder="Escribe tu contraseña" class="input input-bordered w-full max-w-xs"></div> <div class="form-control w-52"><label class="cursor-pointer label"><span class="label-text text-white" data-svelte-h="svelte-jt4h6j">Recordar Contraseña</span> <input type="checkbox" class="toggle toggle-accent" checked></label></div> <button class="btn btn-success" data-svelte-h="svelte-1w7tmns">Login</button> </div>`;
});
export {
  Page as default
};
