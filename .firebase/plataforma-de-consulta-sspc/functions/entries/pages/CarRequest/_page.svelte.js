import { c as create_ssr_component, o as onDestroy, f as each, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/axios.js";
import "firebase/firestore";
function dateToString(date) {
  let readableDate = new Date(date.seconds * 1e3);
  return readableDate.toLocaleDateString() + " " + readableDate.toTimeString().slice(0, 5);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var carRequests = [];
  onDestroy(() => {
  });
  return `<div class="text-sm breadcrumbs"><ul>${each(carRequests, (carRequest) => {
    return `<li style="padding: 10px; box-sizing: border-box; max-width: 400px; text-align: center;"><div class="collapse collapse-plus bg-base-200"><input type="checkbox" checked> <div class="collapse-title text-xl font-medium">ID Peticion: ${escape(carRequest.requestId)}</div> <div class="collapse-content"><p>Fecha: ${escape(dateToString(carRequest.date))}</p> <p>Estado: ${escape(carRequest.status)}</p> <br> <a href="${"CarRequest/" + escape(carRequest.requestId, true)}"><button class="btn btn-neutral" style="background-color: #191970;" data-svelte-h="svelte-167tpll">Atender solicitud</button></a> <br> </div></div> </li>`;
  })}</ul></div>`;
});
export {
  Page as default
};
